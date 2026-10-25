export const DEFAULT_COUNTRY = 'Indonesia';

export const COUNTRY_ASSUMPTIONS = {
  USA: {
    label: 'United States',
    language: 'en',
    currency: 'USD',
    symbol: '$',
    inflationRate: 0.03,
    defaultReturnRate: 0.05,
    defaultMonthlyExpense: 5000,
    note: 'Default inflation uses a long-run planning estimate near the historical U.S. CPI average. Adjust it if you want a conservative scenario.',
  },
  Indonesia: {
    label: 'Indonesia',
    language: 'id',
    currency: 'IDR',
    symbol: 'Rp',
    inflationRate: 0.045,
    defaultReturnRate: 0.06,
    defaultCurrentAge: 50,
    defaultRetirementAge: 55,
    defaultCurrentSavings: 100000000,
    defaultMortgageBalance: 50000000,
    defaultOtherDebt: 10000000,
    defaultMonthlySaving: 5000000,
    defaultMonthlyExpense: 10000000,
    note: 'Inflasi bawaan memakai estimasi perencanaan jangka panjang untuk Indonesia. Ubah jika pola pengeluaran atau asumsi pribadi berbeda.',
  },
};


export const UI_COPY = {
  en: {
    heroEyebrow: 'Pension planning calculator',
    heroTitle: 'Ready for pension?',
    heroCopy: 'Enter age, pension target, life expectancy, country, expenses, savings, mortgage, debt, pension investment return, and desired final balance. The calculator estimates how much money is needed, whether the person is ready, and whether pension should be extended.',
    countriesIncluded: 'Countries included',
    countriesIncludedText: 'USA and Indonesia with editable inflation assumptions',
    personalAssumptions: 'Personal and country assumptions',
    country: 'Country',
    currentAge: 'Current age',
    plannedPensionAge: 'Planned pension age',
    lifeExpectancyAge: 'Life expectancy age',
    currentFinancialStatus: 'Current financial status',
    currentSavings: 'Current savings / investments',
    currentMortgageBalance: 'Current mortgage balance',
    otherDebtBalance: 'Other debt balance',
    monthlySavingUntilPension: 'Monthly saving until pension',
    expensesAndRates: 'Expenses and planning rates',
    currentNetMonthlyExpenses: 'Current net monthly expenses',
    inflationAssumption: 'Inflation record / assumption (%)',
    expectedReturnBeforePension: 'Expected return before pension (%)',
    investmentReturnDuringPension: 'Investment return during pension (%)',
    finalBalanceTarget: 'Final balance target (%)',
    finalBalanceNote: 'Final balance target means how much of the starting pension fund should remain at life expectancy. Use 0% to spend down the fund, 25% to keep 25%, or any percentage up to 99%.',
    checkReadiness: 'Check readiness',
    explanationTitle: 'How the readiness check works',
    explanation1: 'Subtract mortgage and other debt from current savings to estimate net investable assets.',
    explanation2: 'Project assets to pension age using current savings, monthly saving, and expected return.',
    explanation3: 'Inflate current annual net expenses to pension age using the selected country inflation assumption.',
    explanation4: 'Estimate money needed at pension age by treating the target pension fund as invested during retirement, paying yearly expenses, and preserving the selected final balance percentage.',
    explanation5: 'If there is a gap, calculate extra monthly saving needed and test later pension ages until the gap closes or life expectancy is reached.',
    disclaimer: 'This is an educational planning tool, not financial advice. Replace defaults with current official inflation records and personal assumptions before making decisions.',
    creatorDisclaimer: 'This web application is created by Sate Bang Kumis Houston. Contact your certified financial planner for more details plan.',
    readinessStatus: 'Readiness status',
    statusReady: 'Ready',
    statusNotReady: 'Not ready',
    readyRecommendation: 'The person appears financially ready for the selected pension age based on the provided assumptions.',
    notReadyExtend: (age, suggestedAge) => `Not ready at age ${age}. Based on the assumptions, extending pension/retirement to age ${suggestedAge} may close the gap.`,
    notReadyNoSolution: 'Not ready. Extending pension/retirement within the selected life expectancy cannot close the gap; increase savings, reduce expenses/debt, or revise assumptions.',
    moneyNeededAtPensionAge: 'Money needed at pension age',
    projectedAssetsAtPensionAge: 'Projected assets at pension age',
    gapShortfall: 'Gap / shortfall',
    extraMonthlySavingNeeded: 'Extra monthly saving needed',
    netCurrentAssets: 'Net current assets after mortgage/debt',
    inflatedAnnualExpense: 'Inflated annual expense at pension age',
    suggestedPensionAge: (age) => `Suggested pension age: ${age}`,
    noExtensionSolvesGap: 'No pension-age extension solves the gap within life expectancy',
    extensionDetail: (age, assets, need) => `At age ${age}, projected assets become ${assets} versus estimated need ${need}.`,
    planningUses: (inflation, preReturn, pensionReturn, finalBalance) => `Planning uses ${inflation}% annual inflation before/during pension, ${preReturn}% annual return before pension, ${pensionReturn}% annual return during pension, and a final balance target of ${finalBalance}% of the starting pension fund.`,
    chartEyebrow: 'Income sources vs expenses',
    chartTitle: 'Pension readiness graph',
    chartNote: 'Modeled after the reference calculator: annual expenses are shown as the main line, with covered and uncovered expense areas year by year.',
    chartAria: 'Income sources versus expenses yearly chart',
    pensionSavingsCoverage: 'Pension / savings coverage',
    uncoveredGap: 'Uncovered gap',
    annualExpenses: 'Annual expenses',
    finalAnnualExpenses: 'Final annual expenses',
    targetFinalBalance: 'Target final balance',
    actualFinalProjectedAssets: 'Actual final projected assets',
    finalUncoveredAnnualGap: 'Final uncovered annual gap',
    age: 'Age',
    stage: 'Stage',
    covered: 'Covered',
    projectedAssets: 'Projected assets',
    saving: 'Saving',
    pension: 'Pension',
  },
  id: {
    heroEyebrow: 'Kalkulator perencanaan pensiun',
    heroTitle: 'Siap untuk pensiun?',
    heroCopy: 'Masukkan usia, target usia pensiun, harapan hidup, negara, pengeluaran, tabungan, KPR, utang, imbal hasil investasi pensiun, dan target saldo akhir. Kalkulator ini memperkirakan dana yang dibutuhkan, apakah sudah siap, dan apakah usia pensiun perlu diperpanjang.',
    countriesIncluded: 'Negara yang tersedia',
    countriesIncludedText: 'USA dan Indonesia dengan asumsi inflasi yang dapat diubah',
    personalAssumptions: 'Data pribadi dan asumsi negara',
    country: 'Negara',
    currentAge: 'Usia saat ini',
    plannedPensionAge: 'Usia rencana pensiun',
    lifeExpectancyAge: 'Usia harapan hidup',
    currentFinancialStatus: 'Kondisi keuangan saat ini',
    currentSavings: 'Tabungan / investasi saat ini',
    currentMortgageBalance: 'Sisa KPR / cicilan rumah',
    otherDebtBalance: 'Sisa utang lainnya',
    monthlySavingUntilPension: 'Tabungan bulanan sampai pensiun',
    expensesAndRates: 'Pengeluaran dan asumsi perencanaan',
    currentNetMonthlyExpenses: 'Pengeluaran bersih bulanan saat ini',
    inflationAssumption: 'Data / asumsi inflasi (%)',
    expectedReturnBeforePension: 'Imbal hasil sebelum pensiun (%)',
    investmentReturnDuringPension: 'Imbal hasil saat pensiun (%)',
    finalBalanceTarget: 'Target saldo akhir (%)',
    finalBalanceNote: 'Target saldo akhir berarti berapa persen dari dana awal pensiun yang ingin tetap tersisa pada usia harapan hidup. Gunakan 0% jika dana boleh habis, 25% untuk menyisakan 25%, atau persentase lain sampai 99%.',
    checkReadiness: 'Cek kesiapan',
    explanationTitle: 'Cara kerja pengecekan kesiapan',
    explanation1: 'Kurangi KPR dan utang lainnya dari tabungan saat ini untuk memperkirakan aset bersih yang dapat diinvestasikan.',
    explanation2: 'Proyeksikan aset sampai usia pensiun menggunakan tabungan saat ini, tabungan bulanan, dan imbal hasil yang diharapkan.',
    explanation3: 'Naikkan pengeluaran tahunan saat ini sampai usia pensiun menggunakan asumsi inflasi negara yang dipilih.',
    explanation4: 'Perkirakan dana yang dibutuhkan saat pensiun dengan menganggap dana pensiun tetap diinvestasikan, dipakai untuk pengeluaran tahunan, dan menjaga target saldo akhir.',
    explanation5: 'Jika ada kekurangan, hitung tambahan tabungan bulanan yang dibutuhkan dan uji usia pensiun lebih lama sampai kekurangan tertutup atau mencapai usia harapan hidup.',
    disclaimer: 'Ini adalah alat edukasi perencanaan, bukan nasihat keuangan. Ganti nilai bawaan dengan data inflasi resmi terbaru dan asumsi pribadi sebelum mengambil keputusan.',
    creatorDisclaimer: 'Aplikasi web ini dibuat oleh Sate Bang Kumis Houston. Hubungi perencana keuangan bersertifikat untuk rencana yang lebih detail.',
    readinessStatus: 'Status kesiapan',
    statusReady: 'Siap',
    statusNotReady: 'Belum siap',
    readyRecommendation: 'Orang ini terlihat siap secara finansial untuk usia pensiun yang dipilih berdasarkan asumsi yang dimasukkan.',
    notReadyExtend: (age, suggestedAge) => `Belum siap pada usia ${age}. Berdasarkan asumsi ini, memperpanjang pensiun sampai usia ${suggestedAge} dapat menutup kekurangan.`,
    notReadyNoSolution: 'Belum siap. Memperpanjang usia pensiun sampai batas usia harapan hidup belum dapat menutup kekurangan; tingkatkan tabungan, kurangi pengeluaran/utang, atau ubah asumsi.',
    moneyNeededAtPensionAge: 'Dana yang dibutuhkan saat usia pensiun',
    projectedAssetsAtPensionAge: 'Proyeksi aset saat usia pensiun',
    gapShortfall: 'Kekurangan dana',
    extraMonthlySavingNeeded: 'Tambahan tabungan bulanan yang dibutuhkan',
    netCurrentAssets: 'Aset bersih saat ini setelah KPR/utang',
    inflatedAnnualExpense: 'Pengeluaran tahunan saat usia pensiun',
    suggestedPensionAge: (age) => `Saran usia pensiun: ${age}`,
    noExtensionSolvesGap: 'Tidak ada perpanjangan usia pensiun yang menutup kekurangan dalam batas usia harapan hidup',
    extensionDetail: (age, assets, need) => `Pada usia ${age}, proyeksi aset menjadi ${assets} dibanding estimasi kebutuhan ${need}.`,
    planningUses: (inflation, preReturn, pensionReturn, finalBalance) => `Perencanaan memakai inflasi tahunan ${inflation}% sebelum/saat pensiun, imbal hasil tahunan ${preReturn}% sebelum pensiun, imbal hasil tahunan ${pensionReturn}% saat pensiun, dan target saldo akhir ${finalBalance}% dari dana awal pensiun.`,
    chartEyebrow: 'Sumber dana vs pengeluaran',
    chartTitle: 'Grafik kesiapan pensiun',
    chartNote: 'Mengikuti gaya kalkulator referensi: pengeluaran tahunan ditampilkan sebagai garis utama, dengan area dana yang tertutup dan kekurangan per tahun.',
    chartAria: 'Grafik tahunan sumber dana dibanding pengeluaran',
    pensionSavingsCoverage: 'Pengeluaran tertutup tabungan/pensiun',
    uncoveredGap: 'Kekurangan belum tertutup',
    annualExpenses: 'Pengeluaran tahunan',
    finalAnnualExpenses: 'Pengeluaran tahunan akhir',
    targetFinalBalance: 'Target saldo akhir',
    actualFinalProjectedAssets: 'Proyeksi aset akhir aktual',
    finalUncoveredAnnualGap: 'Kekurangan tahunan akhir',
    age: 'Usia',
    stage: 'Tahap',
    covered: 'Tertutup',
    projectedAssets: 'Proyeksi aset',
    saving: 'Menabung',
    pension: 'Pensiun',
  },
};

export function parseCurrencyInput(value) {
  if (typeof value === 'number') return Number.isFinite(value) ? value : 0;
  const raw = String(value ?? '').trim();
  if (!raw) return 0;

  let cleaned = raw.replace(/[^\d.,-]/g, '');
  if (!cleaned || cleaned === '-' || cleaned === '.' || cleaned === ',') return 0;

  const lastComma = cleaned.lastIndexOf(',');
  const lastDot = cleaned.lastIndexOf('.');

  if (lastComma !== -1 && lastDot !== -1) {
    const decimalSeparator = lastComma > lastDot ? ',' : '.';
    const thousandSeparator = decimalSeparator === ',' ? '.' : ',';
    cleaned = cleaned.replaceAll(thousandSeparator, '').replace(decimalSeparator, '.');
  } else if (lastComma !== -1) {
    const parts = cleaned.split(',');
    cleaned = parts.at(-1).length === 3 && parts.length > 1
      ? cleaned.replaceAll(',', '')
      : cleaned.replace(',', '.');
  } else if (lastDot !== -1) {
    const parts = cleaned.split('.');
    cleaned = parts.at(-1).length === 3 && parts.length > 1
      ? cleaned.replaceAll('.', '')
      : cleaned;
  }

  const number = Number(cleaned);
  return Number.isFinite(number) ? number : 0;
}

export function formatCurrencyInput(value, currency = '') {
  const raw = String(value ?? '').trim();
  if (!raw) return '';
  const number = parseCurrencyInput(value);
  const hasDigit = /\d/.test(raw) || typeof value === 'number';
  if (!Number.isFinite(number) || (!hasDigit && number === 0)) return '';

  if (currency === 'IDR') {
    return `Rp ${new Intl.NumberFormat('id-ID', {
      maximumFractionDigits: 2,
    }).format(number)}`;
  }

  if (currency === 'USD') {
    return `$${new Intl.NumberFormat('en-US', {
      maximumFractionDigits: 2,
    }).format(number)}`;
  }

  return new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 2,
  }).format(number);
}

const clampNumber = (value, fallback = 0, parser = Number) => {
  const number = parser(value);
  return Number.isFinite(number) ? number : fallback;
};

export function formatCurrency(amount, currency) {
  const safeAmount = Math.round(clampNumber(amount));
  const locale = currency === 'IDR' ? 'id-ID' : 'en-US';
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(safeAmount);
}

export function formatCompactCurrency(amount, currency) {
  const safeAmount = Math.round(clampNumber(amount));
  const locale = currency === 'IDR' ? 'id-ID' : 'en-US';
  const absAmount = Math.abs(safeAmount);
  let divisor = 1_000;
  let suffix = 'K';
  if (currency === 'IDR' && absAmount >= 1_000_000_000) {
    divisor = 1_000_000_000;
    suffix = 'M';
  } else if (currency !== 'IDR' && absAmount >= 1_000_000) {
    divisor = 1_000_000;
    suffix = 'M';
  }
  const compactValue = safeAmount / divisor;
  return `${new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    maximumFractionDigits: compactValue >= 10 ? 0 : 1,
  }).format(compactValue)}${suffix}`;
}

function futureValueLumpSum(principal, annualRate, years) {
  if (years <= 0) return principal;
  return principal * Math.pow(1 + annualRate, years);
}

function futureValueMonthlySeries(monthlySaving, annualRate, years) {
  const months = Math.max(0, Math.round(years * 12));
  if (months === 0) return 0;
  const monthlyRate = annualRate / 12;
  if (monthlyRate === 0) return monthlySaving * months;
  return monthlySaving * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);
}

export function retirementPortfolioTarget({
  firstYearExpense,
  retirementYears,
  retirementInvestmentRate,
  inflationRate,
  finalBalancePercent = 0,
}) {
  const safeYears = Math.max(1, Math.round(retirementYears));
  const investmentRate = Math.max(-0.99, retirementInvestmentRate);
  let expensePresentValue = 0;

  for (let year = 1; year <= safeYears; year += 1) {
    const expenseForYear = firstYearExpense * Math.pow(1 + inflationRate, year - 1);
    expensePresentValue += expenseForYear / Math.pow(1 + investmentRate, year);
  }

  const finalBalanceFraction = Math.min(Math.max(finalBalancePercent, 0), 0.99);
  const finalBalanceDiscount = finalBalanceFraction / Math.pow(1 + investmentRate, safeYears);
  return expensePresentValue / (1 - finalBalanceDiscount);
}

export function moneyNeededAtRetirement({
  currentAnnualExpense,
  yearsUntilRetirement,
  retirementYears,
  inflationRate,
  retirementInvestmentRate = 0.04,
  finalBalancePercent = 0,
}) {
  const futureAnnualExpense = currentAnnualExpense * Math.pow(1 + inflationRate, Math.max(0, yearsUntilRetirement));
  return retirementPortfolioTarget({
    firstYearExpense: futureAnnualExpense,
    retirementYears,
    retirementInvestmentRate,
    inflationRate,
    finalBalancePercent,
  });
}

export function requiredMonthlySaving({ gapAtRetirement, yearsUntilRetirement, annualReturnRate }) {
  const months = Math.max(0, Math.round(yearsUntilRetirement * 12));
  if (gapAtRetirement <= 0) return 0;
  if (months === 0) return gapAtRetirement;
  const monthlyRate = annualReturnRate / 12;
  if (monthlyRate === 0) return gapAtRetirement / months;
  return gapAtRetirement * monthlyRate / (Math.pow(1 + monthlyRate, months) - 1);
}

export function buildYearlyProjection({
  currentAge,
  retirementAge,
  lifeExpectancy,
  currentAnnualExpense,
  netInvestableAssets,
  monthlySaving,
  annualReturnRate,
  retirementInvestmentRate,
  inflationRate,
  finalBalancePercent = 0,
}) {
  const startAge = Math.round(clampNumber(currentAge));
  const pensionAge = Math.round(clampNumber(retirementAge));
  const endAge = Math.max(startAge, Math.round(clampNumber(lifeExpectancy, startAge)));
  const yearlySaving = Math.max(0, clampNumber(monthlySaving, 0, parseCurrencyInput) * 12);
  const beforePensionReturn = clampNumber(annualReturnRate);
  const duringPensionReturn = clampNumber(retirementInvestmentRate, beforePensionReturn);
  const inflation = clampNumber(inflationRate);
  let assets = clampNumber(netInvestableAssets, 0, parseCurrencyInput);
  const rows = [];

  for (let age = startAge; age <= endAge; age += 1) {
    const yearsFromNow = age - startAge;
    const annualExpense = clampNumber(currentAnnualExpense) * Math.pow(1 + inflation, yearsFromNow);
    const isPensionYear = age >= pensionAge;
    const coveredExpense = isPensionYear ? Math.min(annualExpense, assets) : annualExpense;
    const uncoveredExpense = Math.max(0, annualExpense - coveredExpense);
    const remainingPensionYears = isPensionYear ? Math.max(1, endAge - age + 1) : Math.max(1, endAge - pensionAge + 1);
    const yearsUntilPension = Math.max(0, pensionAge - age);
    const firstPensionYearExpense = clampNumber(currentAnnualExpense) * Math.pow(1 + inflation, yearsFromNow + yearsUntilPension);
    const moneyNeeded = retirementPortfolioTarget({
      firstYearExpense: isPensionYear ? annualExpense : firstPensionYearExpense,
      retirementYears: remainingPensionYears,
      retirementInvestmentRate: duringPensionReturn,
      inflationRate: inflation,
      finalBalancePercent,
    });

    rows.push({
      age,
      phase: isPensionYear ? 'Pension' : 'Saving',
      annualExpense,
      coveredExpense,
      uncoveredExpense,
      yearlySaving: isPensionYear ? 0 : yearlySaving,
      yearlyWithdrawal: isPensionYear ? annualExpense : 0,
      projectedAssets: assets,
      moneyNeeded,
      gap: Math.max(0, moneyNeeded - assets),
    });

    if (age < endAge) {
      if (isPensionYear) {
        assets = Math.max(0, assets * (1 + duringPensionReturn) - annualExpense);
      } else {
        assets = assets * (1 + beforePensionReturn) + yearlySaving;
      }
    }
  }

  return rows;
}

function readinessForAge(input, retirementAge) {
  const country = COUNTRY_ASSUMPTIONS[input.country] ?? COUNTRY_ASSUMPTIONS.USA;
  const currentAge = clampNumber(input.currentAge);
  const lifeExpectancy = clampNumber(input.lifeExpectancy);
  const yearsUntilRetirement = Math.max(0, retirementAge - currentAge);
  const retirementYears = Math.max(1, lifeExpectancy - retirementAge);
  const monthlyExpense = clampNumber(input.monthlyExpense, 0, parseCurrencyInput);
  const currentAnnualExpense = monthlyExpense * 12;
  const inflationRate = clampNumber(input.inflationRate, country.inflationRate * 100) / 100;
  const annualReturnRate = clampNumber(input.annualReturnRate, country.defaultReturnRate * 100) / 100;
  const retirementInvestmentRate = clampNumber(input.retirementInvestmentRate, annualReturnRate * 100) / 100;
  const finalBalancePercent = clampNumber(input.finalBalancePercent, 0) / 100;
  const currentSavings = clampNumber(input.currentSavings, 0, parseCurrencyInput);
  const mortgageBalance = clampNumber(input.mortgageBalance, 0, parseCurrencyInput);
  const otherDebt = clampNumber(input.otherDebt, 0, parseCurrencyInput);
  const monthlySaving = clampNumber(input.monthlySaving, 0, parseCurrencyInput);
  const netInvestableAssets = currentSavings - mortgageBalance - otherDebt;
  const projectedAssets = futureValueLumpSum(netInvestableAssets, annualReturnRate, yearsUntilRetirement)
    + futureValueMonthlySeries(monthlySaving, annualReturnRate, yearsUntilRetirement);
  const neededAtRetirement = moneyNeededAtRetirement({
    currentAnnualExpense,
    yearsUntilRetirement,
    retirementYears,
    inflationRate,
    retirementInvestmentRate,
    finalBalancePercent,
  });
  const futureAnnualExpense = currentAnnualExpense * Math.pow(1 + inflationRate, yearsUntilRetirement);
  const targetFinalBalance = neededAtRetirement * finalBalancePercent;
  const gapAtRetirement = Math.max(0, neededAtRetirement - projectedAssets);
  const surplusAtRetirement = Math.max(0, projectedAssets - neededAtRetirement);
  const isReady = gapAtRetirement <= 0;
  const requiredSaving = requiredMonthlySaving({ gapAtRetirement, yearsUntilRetirement, annualReturnRate });
  const yearlyProjection = buildYearlyProjection({
    currentAge,
    retirementAge,
    lifeExpectancy,
    currentAnnualExpense,
    netInvestableAssets,
    monthlySaving,
    annualReturnRate,
    retirementInvestmentRate,
    inflationRate,
    finalBalancePercent,
  });

  return {
    country,
    currency: country.currency,
    currentAge,
    retirementAge,
    lifeExpectancy,
    yearsUntilRetirement,
    retirementYears,
    monthlyExpense,
    currentAnnualExpense,
    inflationRate,
    annualReturnRate,
    retirementInvestmentRate,
    finalBalancePercent,
    currentSavings,
    mortgageBalance,
    otherDebt,
    monthlySaving,
    netInvestableAssets,
    projectedAssets,
    neededAtRetirement,
    futureAnnualExpense,
    targetFinalBalance,
    gapAtRetirement,
    surplusAtRetirement,
    requiredMonthlySaving: requiredSaving,
    yearlyProjection,
    isReady,
    status: isReady ? 'Ready' : 'Not ready',
  };
}

export function calculateReadiness(input) {
  const currentAge = clampNumber(input.currentAge);
  const targetRetirementAge = clampNumber(input.retirementAge);
  const lifeExpectancy = clampNumber(input.lifeExpectancy);
  const initial = readinessForAge(input, targetRetirementAge);
  let suggestedRetirementAge = initial.isReady ? targetRetirementAge : null;
  let suggestedScenario = initial.isReady ? initial : null;

  if (!initial.isReady) {
    for (let age = Math.max(targetRetirementAge + 1, currentAge + 1); age < lifeExpectancy; age += 1) {
      const scenario = readinessForAge(input, age);
      if (scenario.isReady) {
        suggestedRetirementAge = age;
        suggestedScenario = scenario;
        break;
      }
    }
  }

  let recommendation;
  if (initial.isReady) {
    recommendation = 'The person appears financially ready for the selected pension age based on the provided assumptions.';
  } else if (suggestedRetirementAge) {
    recommendation = `Not ready at age ${targetRetirementAge}. Based on the assumptions, extending pension/retirement to age ${suggestedRetirementAge} may close the gap.`;
  } else {
    recommendation = 'Not ready. Extending pension/retirement within the selected life expectancy cannot close the gap; increase savings, reduce expenses/debt, or revise assumptions.';
  }

  return {
    ...initial,
    suggestedRetirementAge,
    suggestedScenario,
    recommendation,
  };
}

export function bindPensionForm({ form, resultRoot, projectionRoot }) {
  const countrySelect = form.elements.country;
  if (!countrySelect.value) countrySelect.value = DEFAULT_COUNTRY;
  const inflationInput = form.elements.inflationRate;
  const returnInput = form.elements.annualReturnRate;
  const retirementReturnInput = form.elements.retirementInvestmentRate;
  const monthlyExpenseInput = form.elements.monthlyExpense;
  const currentAgeInput = form.elements.currentAge;
  const retirementAgeInput = form.elements.retirementAge;
  const currentSavingsInput = form.elements.currentSavings;
  const mortgageBalanceInput = form.elements.mortgageBalance;
  const otherDebtInput = form.elements.otherDebt;
  const monthlySavingInput = form.elements.monthlySaving;
  const currencyInputs = [...form.querySelectorAll('.currency-input')];
  const countryNote = document.getElementById('countryNote');

  function selectedCopy() {
    const country = COUNTRY_ASSUMPTIONS[countrySelect.value] ?? COUNTRY_ASSUMPTIONS.USA;
    return UI_COPY[country.language] ?? UI_COPY.en;
  }

  function syncPageCopy() {
    const copy = selectedCopy();
    for (const element of document.querySelectorAll('[data-i18n]')) {
      const key = element.dataset.i18n;
      if (copy[key]) element.textContent = copy[key];
    }
    document.documentElement.lang = countrySelect.value === 'Indonesia' ? 'id' : 'en';
    document.title = countrySelect.value === 'Indonesia' ? 'Pemeriksa Kesiapan Pensiun' : 'Pension Readiness Checker';
  }

  function syncCountryDefaults(force = false) {
    const country = COUNTRY_ASSUMPTIONS[countrySelect.value];
    if (force || !inflationInput.value) inflationInput.value = (country.inflationRate * 100).toFixed(1);
    if (force || !returnInput.value) returnInput.value = (country.defaultReturnRate * 100).toFixed(1);
    if (force || !retirementReturnInput.value) retirementReturnInput.value = (country.defaultReturnRate * 100).toFixed(1);
    if ((force || !currentAgeInput.value) && country.defaultCurrentAge) currentAgeInput.value = country.defaultCurrentAge;
    if ((force || !retirementAgeInput.value) && country.defaultRetirementAge) retirementAgeInput.value = country.defaultRetirementAge;
    if ((force || !currentSavingsInput.value) && country.defaultCurrentSavings !== undefined) currentSavingsInput.value = formatCurrencyInput(country.defaultCurrentSavings, country.currency);
    if ((force || !mortgageBalanceInput.value) && country.defaultMortgageBalance !== undefined) mortgageBalanceInput.value = formatCurrencyInput(country.defaultMortgageBalance, country.currency);
    if ((force || !otherDebtInput.value) && country.defaultOtherDebt !== undefined) otherDebtInput.value = formatCurrencyInput(country.defaultOtherDebt, country.currency);
    if ((force || !monthlySavingInput.value) && country.defaultMonthlySaving !== undefined) monthlySavingInput.value = formatCurrencyInput(country.defaultMonthlySaving, country.currency);
    if (force || !monthlyExpenseInput.value) monthlyExpenseInput.value = formatCurrencyInput(country.defaultMonthlyExpense, country.currency);
    countryNote.textContent = country.note;
  }

  function collectInput() {
    return Object.fromEntries(new FormData(form).entries());
  }

  function selectedCurrency() {
    return COUNTRY_ASSUMPTIONS[countrySelect.value]?.currency ?? '';
  }

  function formatCurrencyInputs() {
    for (const input of currencyInputs) {
      input.value = formatCurrencyInput(input.value, selectedCurrency());
    }
  }

  function renderMetric(label, value, className = '') {
    return `<div class="metric ${className}"><span>${label}</span><strong>${value}</strong></div>`;
  }

  function renderYearlyProjection(result) {
    const rows = result.yearlyProjection;
    const c = result.currency;
    const copy = selectedCopy();
    const maxValue = Math.max(1, ...rows.flatMap((row) => [row.annualExpense, row.coveredExpense, row.uncoveredExpense]));
    const width = 1080;
    const height = 380;
    const padLeft = 70;
    const padRight = 18;
    const padTop = 10;
    const padBottom = 38;
    const plotWidth = width - padLeft - padRight;
    const plotHeight = height - padTop - padBottom;
    const xForIndex = (index) => padLeft + (rows.length === 1 ? 0 : (index / (rows.length - 1)) * plotWidth);
    const yForValue = (value) => padTop + (1 - Math.min(Math.max(value / maxValue, 0), 1)) * plotHeight;
    const smoothPathFor = (key) => rows.map((row, index) => `${index === 0 ? 'M' : 'L'}${xForIndex(index).toFixed(1)},${yForValue(row[key]).toFixed(1)}`).join(' ');
    const areaPathFor = (key) => `${smoothPathFor(key)} L${xForIndex(rows.length - 1).toFixed(1)},${height - padBottom} L${xForIndex(0).toFixed(1)},${height - padBottom} Z`;
    const labelIndexes = [...new Set([0, ...rows.map((_, index) => index).filter((_, index) => index % Math.max(1, Math.ceil(rows.length / 10)) === 0), rows.length - 1])];
    const yTicks = [0, 0.25, 0.5, 0.75, 1];
    const tableRows = rows.map((row) => `
      <tr>
        <td>${row.age}</td>
        <td>${row.phase === 'Pension' ? copy.pension : copy.saving}</td>
        <td>${formatCurrency(row.annualExpense, c)}</td>
        <td>${formatCurrency(row.coveredExpense, c)}</td>
        <td>${formatCurrency(row.uncoveredExpense, c)}</td>
        <td>${formatCurrency(row.projectedAssets, c)}</td>
      </tr>
    `).join('');

    return `
      <div class="projection-card card reference-style-chart">
        <div class="projection-heading">
          <div>
            <p class="eyebrow">${copy.chartEyebrow}</p>
            <h2>${copy.chartTitle}</h2>
            <p class="note">${copy.chartNote}</p>
          </div>
        </div>
        <div class="projection-chart horizontal-chart">
          <svg class="projection-line-chart" viewBox="0 0 ${width} ${height}" role="img" aria-label="${copy.chartAria}">
            ${yTicks.map((tick) => {
              const y = yForValue(maxValue * tick);
              return `<line class="grid-line dashed" x1="${padLeft}" y1="${y}" x2="${width - padRight}" y2="${y}"></line><text class="axis-label y-label" x="${padLeft - 10}" y="${y + 4}">${formatCompactCurrency(maxValue * tick, c)}</text>`;
            }).join('')}
            <path class="chart-area pension-area" d="${areaPathFor('coveredExpense')}"></path>
            <path class="chart-area gap-area" d="${areaPathFor('uncoveredExpense')}"></path>
            <path class="chart-line covered-line" d="${smoothPathFor('coveredExpense')}"></path>
            <path class="chart-line gap-line" d="${smoothPathFor('uncoveredExpense')}"></path>
            <path class="chart-line expense-line" d="${smoothPathFor('annualExpense')}"></path>
            ${labelIndexes.map((index) => `<text class="axis-label x-label" x="${xForIndex(index)}" y="${height - 12}">${rows[index].age}</text>`).join('')}
          </svg>
        </div>
        <div class="reference-legend">
          <span><b class="legend-dot pension"></b>${copy.pensionSavingsCoverage}</span>
          <span><b class="legend-dot gap"></b>${copy.uncoveredGap}</span>
          <span><b class="legend-line expense"></b>${copy.annualExpenses}</span>
        </div>
        <div class="projection-summary-row">
          <div><span>${copy.finalAnnualExpenses}</span><strong>${formatCurrency(rows.at(-1).annualExpense, c)}</strong></div>
          <div><span>${copy.targetFinalBalance}</span><strong>${formatCurrency(result.targetFinalBalance, c)}</strong></div>
          <div><span>${copy.actualFinalProjectedAssets}</span><strong>${formatCurrency(rows.at(-1).projectedAssets, c)}</strong></div>
          <div><span>${copy.finalUncoveredAnnualGap}</span><strong>${formatCurrency(rows.at(-1).uncoveredExpense, c)}</strong></div>
        </div>
        <div class="projection-table-wrap">
          <table class="projection-table">
            <thead>
              <tr>
                <th>${copy.age}</th>
                <th>${copy.stage}</th>
                <th>${copy.annualExpenses}</th>
                <th>${copy.covered}</th>
                <th>${copy.uncoveredGap}</th>
                <th>${copy.projectedAssets}</th>
              </tr>
            </thead>
            <tbody>${tableRows}</tbody>
          </table>
        </div>
      </div>
    `;
  }

  function render() {
    const result = calculateReadiness(collectInput());
    const c = result.currency;
    const copy = selectedCopy();
    const statusText = result.isReady ? copy.statusReady : copy.statusNotReady;
    const suggestedText = result.suggestedRetirementAge
      ? copy.suggestedPensionAge(result.suggestedRetirementAge)
      : copy.noExtensionSolvesGap;
    const extensionDetail = result.suggestedScenario && !result.isReady
      ? copy.extensionDetail(result.suggestedRetirementAge, formatCurrency(result.suggestedScenario.projectedAssets, c), formatCurrency(result.suggestedScenario.neededAtRetirement, c))
      : '';
    let recommendation;
    if (result.isReady) {
      recommendation = copy.readyRecommendation;
    } else if (result.suggestedRetirementAge) {
      recommendation = copy.notReadyExtend(result.retirementAge, result.suggestedRetirementAge);
    } else {
      recommendation = copy.notReadyNoSolution;
    }

    resultRoot.innerHTML = `
      <section class="result-card ${result.isReady ? 'ready' : 'not-ready'}">
        <p class="eyebrow">${copy.readinessStatus}</p>
        <h2>${statusText}</h2>
        <p>${recommendation}</p>
        <div class="metrics">
          ${renderMetric(copy.moneyNeededAtPensionAge, formatCurrency(result.neededAtRetirement, c))}
          ${renderMetric(copy.projectedAssetsAtPensionAge, formatCurrency(result.projectedAssets, c))}
          ${renderMetric(copy.gapShortfall, formatCurrency(result.gapAtRetirement, c), result.gapAtRetirement > 0 ? 'danger' : 'good')}
          ${renderMetric(copy.extraMonthlySavingNeeded, formatCurrency(result.requiredMonthlySaving, c), result.requiredMonthlySaving > 0 ? 'warning' : 'good')}
          ${renderMetric(copy.netCurrentAssets, formatCurrency(result.netInvestableAssets, c))}
          ${renderMetric(copy.inflatedAnnualExpense, formatCurrency(result.futureAnnualExpense, c))}
        </div>
        <div class="advice">
          <h3>${suggestedText}</h3>
          <p>${extensionDetail}</p>
          <p>${copy.planningUses(Math.round(result.inflationRate * 1000) / 10, Math.round(result.annualReturnRate * 1000) / 10, Math.round(result.retirementInvestmentRate * 1000) / 10, Math.round(result.finalBalancePercent * 1000) / 10)}</p>
        </div>
      </section>
    `;
    if (projectionRoot) {
      projectionRoot.innerHTML = renderYearlyProjection(result);
    }
  }

  countrySelect.addEventListener('change', () => {
    syncCountryDefaults(true);
    syncPageCopy();
    formatCurrencyInputs();
    render();
  });
  form.addEventListener('input', render);
  for (const input of currencyInputs) {
    input.addEventListener('blur', () => {
      input.value = formatCurrencyInput(input.value, selectedCurrency());
      render();
    });
  }
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    formatCurrencyInputs();
    render();
  });

  syncCountryDefaults(true);
  syncPageCopy();
  formatCurrencyInputs();
  render();
}
