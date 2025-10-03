import React from 'react';

const CompanyValues = () => {
  return (
    <section className="py-20 relative overflow-hidden min-h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/6130374/pexels-photo-6130374.jpeg?auto=compress&cs=tinysrgb&w=1920')`
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-8 lg:mb-16 text-center lg:text-left">
          <div className="text-emerald-300 text-sm font-medium uppercase tracking-wider mb-2">
            OUR
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-white">
            CORE VALUES
          </h2>
        </div>

        {/* Three Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Value 1 */}
          <div className="text-center space-y-4 lg:space-y-6">
            <div className="flex justify-center mb-4 lg:mb-6">
              <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 rounded-full overflow-hidden border-4 border-emerald-400/30 shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/4198935/pexels-photo-4198935.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Quality Excellence"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-white mb-3 lg:mb-4 tracking-wide">
              QUALITY EXCELLENCE
            </h3>
            
            <p className="text-emerald-100 text-sm lg:text-base leading-relaxed">
              We maintain the highest standards of quality in every grain of rice we export, ensuring our customers receive only the finest basmati rice varieties that meet international quality standards.
            </p>
          </div>

          {/* Value 2 */}
          <div className="text-center space-y-4 lg:space-y-6">
            <div className="flex justify-center mb-4 lg:mb-6">
              <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 rounded-full overflow-hidden border-4 border-emerald-400/30 shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/4110071/pexels-photo-4110071.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="SUPPLY CHAIN"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-white mb-3 lg:mb-4 tracking-wide">
              EFFICIENT SUPPLY CHAIN
            </h3>
            
            <p className="text-emerald-100 text-sm lg:text-base leading-relaxed">
              A robust and efficient supply chain network to ensure a consistent and reliable flow of rice from India to international destinations. We work closely with reputed farmers, processors, and logistics partners to maintain the integrity of our supply chain.
            </p>
          </div>

          {/* Value 3 */}
          <div className="text-center space-y-4 lg:space-y-6">
            <div className="flex justify-center mb-4 lg:mb-6">
              <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 rounded-full overflow-hidden border-4 border-emerald-400/30 shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/2589457/pexels-photo-2589457.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Global Reach"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-white mb-3 lg:mb-4 tracking-wide">
              GLOBAL OUTREACH
            </h3>
            
            <p className="text-emerald-100 text-sm lg:text-base leading-relaxed">
              Our extensive network and experience enable us to serve customers across multiple countries, making NavBharat Global a truly international rice exporting company with global reach.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyValues;