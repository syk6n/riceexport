import DarkHeader from '../components/DarkHeader';
import Footer from '../components/Footer';

const PrivateLabelling = () => {
  const packagingOptions = [
    { name: 'Jute Bags (Natural Brown)' },
    { name: 'Bleached White Jute' },
    { name: 'Standard P.P. Bags' },
    { name: 'BOPP Bags' },
    { name: 'Non Woven Bags' },
    { name: 'Consumer Polypacks' },
    { name: 'Cotton Bags' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <DarkHeader />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#000435] mb-6">
              Your Label, Our Legacy of Quality
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              We also offer complete private labelling services for clients looking to build or expand
              their own brand in global markets. From sourcing and milling to packaging and export logistics,
              we deliver high-quality rice customized to your brand requirements. Our team works closely with
              you to develop packaging designs, pack sizes, and product specifications that align with your
              market needs, ensuring consistency, reliability, and premium quality in every shipment.
            </p>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#000435] mb-12 text-center">
              Packaging Options
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {packagingOptions.slice(0, 4).map((option, index) => (
                <div
                  key={index}
                  className="aspect-square bg-gray-100 rounded-2xl overflow-hidden group hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-full h-full flex items-center justify-center p-8">
                    <h3 className="text-xl font-semibold text-[#000435] text-center">
                      {option.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-8 sm:p-12 lg:p-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#000435] mb-8 text-center">
              Additional Packaging Solutions
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {packagingOptions.slice(4).map((option, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <h3 className="text-lg font-semibold text-[#000435]">
                    {option.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivateLabelling;
