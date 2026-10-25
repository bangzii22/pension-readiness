import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import {
  COUNTRY_ASSUMPTIONS,
  DEFAULT_COUNTRY,
  UI_COPY,
  calculateReadiness,
  formatCurrencyInput,
  formatCurrency,
  formatCompactCurrency,
  moneyNeededAtRetirement,
  parseCurrencyInput,
  requiredMonthlySaving,
  retirementPortfolioTarget,
  buildYearlyProjection,
} from '../src/pension.js';

function approx(actual, expected, tolerance = 1) {
  assert.ok(Math.abs(actual - expected) <= tolerance, `expected ${actual} to be within ${tolerance} of ${expected}`);
}

assert.equal(DEFAULT_COUNTRY, 'Indonesia');
const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
assert.match(html, /<option value="Indonesia" selected>Indonesia<\/option>/);
assert.doesNotMatch(html, /<option value="USA" selected>USA<\/option>/);
assert.equal(COUNTRY_ASSUMPTIONS.USA.currency, 'USD');
assert.equal(COUNTRY_ASSUMPTIONS.Indonesia.currency, 'IDR');
assert.equal(COUNTRY_ASSUMPTIONS.USA.language, 'en');
assert.equal(COUNTRY_ASSUMPTIONS.Indonesia.language, 'id');
assert.equal(UI_COPY.id.heroTitle, 'Siap untuk pensiun?');
assert.equal(UI_COPY.id.statusReady, 'Siap');
assert.equal(UI_COPY.id.statusNotReady, 'Belum siap');
assert.equal(COUNTRY_ASSUMPTIONS.Indonesia.defaultCurrentAge, 50);
assert.equal(COUNTRY_ASSUMPTIONS.Indonesia.defaultRetirementAge, 55);
assert.equal(COUNTRY_ASSUMPTIONS.Indonesia.defaultCurrentSavings, 100000000);
assert.equal(COUNTRY_ASSUMPTIONS.Indonesia.defaultMortgageBalance, 50000000);
assert.equal(COUNTRY_ASSUMPTIONS.Indonesia.defaultOtherDebt, 10000000);
assert.equal(COUNTRY_ASSUMPTIONS.Indonesia.defaultMonthlySaving, 5000000);
assert.equal(COUNTRY_ASSUMPTIONS.Indonesia.defaultMonthlyExpense, 10000000);
assert.equal(formatCurrencyInput(COUNTRY_ASSUMPTIONS.Indonesia.defaultCurrentSavings, 'IDR'), 'Rp 100.000.000');
assert.equal(formatCurrencyInput(COUNTRY_ASSUMPTIONS.Indonesia.defaultMortgageBalance, 'IDR'), 'Rp 50.000.000');
assert.equal(formatCurrencyInput(COUNTRY_ASSUMPTIONS.Indonesia.defaultOtherDebt, 'IDR'), 'Rp 10.000.000');
assert.equal(formatCurrencyInput(COUNTRY_ASSUMPTIONS.Indonesia.defaultMonthlyExpense, 'IDR'), 'Rp 10.000.000');
assert.equal(formatCurrency(1234567, 'USD'), '$1,234,567');
assert.equal(formatCurrency(1234567, 'IDR'), 'Rp 1.234.567');
assert.equal(formatCompactCurrency(50000, 'USD'), '$50K');
assert.equal(formatCompactCurrency(1200000, 'USD'), '$1.2M');
assert.equal(formatCompactCurrency(2500000000, 'IDR'), 'Rp 2,5M');
assert.equal(parseCurrencyInput('1,234,567'), 1234567);
assert.equal(parseCurrencyInput('1.234.567'), 1234567);
assert.equal(parseCurrencyInput('Rp 1.234.567'), 1234567);
assert.equal(parseCurrencyInput('$1,234,567'), 1234567);
assert.equal(parseCurrencyInput('1,234,567.89'), 1234567.89);
assert.equal(parseCurrencyInput('1.234.567,89'), 1234567.89);
assert.equal(parseCurrencyInput(''), 0);
assert.equal(formatCurrencyInput(1234567), '1,234,567');
assert.equal(formatCurrencyInput('1.234.567'), '1,234,567');
assert.equal(formatCurrencyInput(0), '0');
assert.equal(formatCurrencyInput('0'), '0');
assert.equal(formatCurrencyInput(1234567, 'IDR'), 'Rp 1.234.567');
assert.equal(formatCurrencyInput('Rp 1.234.567', 'IDR'), 'Rp 1.234.567');
assert.equal(formatCurrencyInput(0, 'IDR'), 'Rp 0');
assert.equal(formatCurrencyInput('0', 'IDR'), 'Rp 0');
assert.equal(formatCurrencyInput(1234567, 'USD'), '$1,234,567');
assert.equal(formatCurrencyInput(0, 'USD'), '$0');
assert.equal(formatCurrencyInput('abc'), '');

const finiteRetirementTarget = retirementPortfolioTarget({
  firstYearExpense: 60000 * Math.pow(1.03, 20),
  retirementYears: 25,
  retirementInvestmentRate: 0.05,
  inflationRate: 0.03,
  finalBalancePercent: 0.25,
});
approx(finiteRetirementTarget, 2233042, 10);

const needed = moneyNeededAtRetirement({
  currentAnnualExpense: 60000,
  yearsUntilRetirement: 20,
  retirementYears: 25,
  inflationRate: 0.03,
  retirementInvestmentRate: 0.05,
  finalBalancePercent: 0.25,
});
approx(needed, 2233042, 10);

const zeroFinalBalanceTarget = moneyNeededAtRetirement({
  currentAnnualExpense: 60000,
  yearsUntilRetirement: 20,
  retirementYears: 25,
  inflationRate: 0.03,
  retirementInvestmentRate: 0.05,
  finalBalancePercent: 0,
});
approx(zeroFinalBalanceTarget, 2068187, 10);

const monthlySaving = requiredMonthlySaving({
  gapAtRetirement: 500000,
  yearsUntilRetirement: 20,
  annualReturnRate: 0.05,
});
approx(monthlySaving, 1215.5, 1);

const sampleTimeline = buildYearlyProjection({
  currentAge: 45,
  retirementAge: 47,
  lifeExpectancy: 50,
  currentAnnualExpense: 60000,
  netInvestableAssets: 100000,
  monthlySaving: 12000,
  annualReturnRate: 0.05,
  retirementInvestmentRate: 0.04,
  inflationRate: 0.03,
});
assert.equal(sampleTimeline.length, 6);
assert.deepEqual(sampleTimeline.map((row) => row.age), [45, 46, 47, 48, 49, 50]);
assert.equal(sampleTimeline[0].phase, 'Saving');
assert.equal(sampleTimeline[2].phase, 'Pension');
assert.equal(sampleTimeline[0].annualExpense, 60000);
assert.equal(sampleTimeline[0].yearlySaving, 144000);
assert.equal(sampleTimeline[2].yearlySaving, 0);
assert.equal(sampleTimeline[2].coveredExpense, sampleTimeline[2].annualExpense);
assert.equal(sampleTimeline[2].uncoveredExpense, 0);
assert.ok(sampleTimeline[1].projectedAssets > sampleTimeline[0].projectedAssets);
assert.ok(sampleTimeline[2].annualExpense > sampleTimeline[1].annualExpense);
assert.ok(sampleTimeline[3].projectedAssets < sampleTimeline[2].projectedAssets);

const readyCase = calculateReadiness({
  country: 'USA',
  currentAge: 45,
  retirementAge: 65,
  lifeExpectancy: 90,
  monthlyExpense: '5,000',
  currentSavings: '1,500,000',
  mortgageBalance: '0',
  otherDebt: '0',
  monthlySaving: '2,500',
  annualReturnRate: 5,
  retirementInvestmentRate: 5,
  finalBalancePercent: 25,
});
assert.equal(readyCase.monthlyExpense, 5000);
assert.equal(readyCase.currentSavings, 1500000);
assert.equal(readyCase.finalBalancePercent, 0.25);
approx(readyCase.targetFinalBalance, readyCase.neededAtRetirement * 0.25, 1);
assert.equal(readyCase.status, 'Ready');
assert.equal(readyCase.isReady, true);
assert.equal(readyCase.gapAtRetirement, 0);
assert.equal(readyCase.yearlyProjection.length, 46);
assert.equal(readyCase.yearlyProjection[0].age, 45);
assert.equal(readyCase.yearlyProjection.at(-1).age, 90);
assert.equal(readyCase.yearlyProjection.find((row) => row.age === 65).phase, 'Pension');

const notReadyCase = calculateReadiness({
  country: 'USA',
  currentAge: 45,
  retirementAge: 60,
  lifeExpectancy: 90,
  monthlyExpense: 5000,
  currentSavings: 100000,
  mortgageBalance: 200000,
  otherDebt: 30000,
  monthlySaving: 4000,
  annualReturnRate: 5,
});
assert.equal(notReadyCase.status, 'Not ready');
assert.equal(notReadyCase.isReady, false);
assert.ok(notReadyCase.gapAtRetirement > 0);
assert.ok(notReadyCase.suggestedRetirementAge > 60);
assert.ok(notReadyCase.requiredMonthlySaving > 4000);

const impossibleCase = calculateReadiness({
  country: 'Indonesia',
  currentAge: 63,
  retirementAge: 65,
  lifeExpectancy: 80,
  monthlyExpense: 25000000,
  currentSavings: 100000000,
  mortgageBalance: 0,
  otherDebt: 0,
  monthlySaving: 0,
  annualReturnRate: 6,
  retirementInvestmentRate: 3,
  finalBalancePercent: 25,
});
assert.equal(impossibleCase.isReady, false);
assert.equal(impossibleCase.suggestedRetirementAge, null);
assert.match(impossibleCase.recommendation, /cannot close the gap/i);

console.log('All pension calculation tests passed');
