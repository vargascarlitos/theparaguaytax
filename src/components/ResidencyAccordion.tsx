interface Props {
  lang: 'en' | 'es';
  translations: {
    standard: string;
    vip: string;
    hyperfast: string;
    mostPopular: string;
    standardDesc: string;
    vipDesc: string;
    hyperfastDesc: string;
    comparisonTable: string;
    whatIncluded: string;
    residency: string;
    cedula: string;
    translationsIncluded: string;
    rucInscriptionExtra: string;
    rucTaxCert: string;
    rentalContractPostal: string;
    airportTransfers: string;
    officeTransfers: string;
    shipmentId: string;
    natureTrip: string;
    waitingTime: string;
    tripsNeeded: string;
    yes: string;
    months: string;
    month: string;
    shortTrips: string;
    shortTrip: string;
    getStarted: string;
    chooseVip: string;
    chooseHyperfast: string;
  };
  whatsappUrl: string;
}

export default function ResidencyAccordion({ translations: t, whatsappUrl }: Props) {
  const tableItems = [
    { label: t.cedula, standard: t.yes, vip: t.yes, hyperfast: t.yes },
    { label: t.residency, standard: t.yes, vip: t.yes, hyperfast: t.yes },
    { label: t.translationsIncluded, standard: t.yes, vip: t.yes, hyperfast: t.yes },
    { label: t.rucInscriptionExtra, standard: '', vip: t.yes, hyperfast: t.yes },
    { label: t.rucTaxCert, standard: '', vip: t.yes, hyperfast: t.yes },
    { label: t.rentalContractPostal, standard: '', vip: t.yes, hyperfast: t.yes },
    { label: t.airportTransfers, standard: '', vip: '', hyperfast: t.yes },
    { label: t.officeTransfers, standard: '', vip: '', hyperfast: t.yes },
    { label: t.shipmentId, standard: '', vip: '', hyperfast: t.yes },
    { label: t.natureTrip, standard: '', vip: '', hyperfast: t.yes },
    { label: t.waitingTime, standard: `2 ${t.months}`, vip: `2 ${t.months}`, hyperfast: `2 ${t.months}` },
    { label: t.tripsNeeded, standard: `2 ${t.shortTrips}`, vip: `1 ${t.shortTrip}`, hyperfast: `1 ${t.shortTrip}` },
  ];

  const plans = [
    {
      id: 'standard' as const,
      name: t.standard.split('(')[0].trim(),
      price: '$1800',
      timeAndTrips: `2 ${t.months} / 2 ${t.shortTrips}`,
      description: t.standardDesc,
      color: 'gray',
      ctaText: t.getStarted,
      popular: false,
    },
    {
      id: 'vip' as const,
      name: t.vip.split('(')[0].trim(),
      price: '$2500',
      timeAndTrips: `2 ${t.months} / 1 ${t.shortTrip}`,
      description: t.vipDesc,
      color: 'primary',
      ctaText: t.chooseVip,
      popular: true,
    },
    {
      id: 'hyperfast' as const,
      name: t.hyperfast.split('(')[0].trim(),
      price: '$3500',
      timeAndTrips: `2 ${t.months} / 1 ${t.shortTrip}`,
      description: t.hyperfastDesc,
      color: 'accent',
      ctaText: t.chooseHyperfast,
      popular: false,
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 xl:gap-8 mb-16">
      {plans.map((plan) => {
        const borderColor = plan.color === 'primary' ? 'border-[#E64A2E]' : plan.color === 'accent' ? 'border-[#D52B1E]' : 'border-gray-200';
        const bgColor = plan.color === 'primary' ? 'bg-[#E64A2E]' : plan.color === 'accent' ? 'bg-[#D52B1E]' : 'bg-gray-100';
        const hoverBgColor = plan.color === 'primary' ? 'hover:bg-[#D43B1F]' : plan.color === 'accent' ? 'hover:bg-[#AA2218]' : 'hover:bg-gray-200';
        const priceColor = plan.color === 'primary' ? 'text-[#E64A2E]' : plan.color === 'accent' ? 'text-[#D52B1E]' : 'text-[#E64A2E]';

        return (
          <div
            key={plan.id}
            className={`relative bg-white rounded-3xl shadow-xl border-2 ${borderColor} overflow-hidden transition-all duration-300 ${
              plan.color === 'primary' ? 'shadow-2xl' : ''
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 z-10">
                <div className="bg-gradient-to-r from-[#E64A2E] to-[#D43B1F] text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg border-2 border-white">
                  {t.mostPopular}
                </div>
              </div>
            )}

            <div className={`p-8 ${plan.popular ? 'pt-12' : ''}`}>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">{plan.name}</h3>
                <div className={`text-5xl font-extrabold ${priceColor} mb-1`}>{plan.price}</div>
                <div className="text-sm font-medium text-gray-700 mb-3">{plan.timeAndTrips}</div>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-4 space-y-3 mb-6">
                <h4 className="font-bold text-sm text-gray-700 mb-3 uppercase tracking-wide">
                  {t.whatIncluded}
                </h4>
                {tableItems.map((item, index) => {
                  const value = item[plan.id];
                  const isYes = value === t.yes;

                  return (
                    <div key={index} className="flex items-start justify-between text-sm border-b border-gray-200 pb-2 last:border-0 last:pb-0">
                      <span className="font-medium text-gray-700 flex-1 pr-2">{item.label}</span>
                      <span className={`flex items-center gap-1 font-bold whitespace-nowrap ${
                        isYes ? 'text-green-600' : value ? priceColor : 'text-gray-300'
                      }`}>
                        {isYes && (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                        {value || '—'}
                      </span>
                    </div>
                  );
                })}
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full ${
                  plan.color === 'primary' || plan.color === 'accent'
                    ? `${bgColor} ${hoverBgColor} text-white shadow-lg hover:shadow-xl`
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                } font-bold py-4 px-6 rounded-xl text-center transition-all duration-300`}
              >
                {plan.ctaText}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
