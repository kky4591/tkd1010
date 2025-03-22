import React from 'react';

const Philosophy = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">道場理念</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src="https://fuchudojo.sakura.ne.jp/itf-japan/2015/150827-31.jpg"
              alt="武道トレーニング"
              className="w-full md:w-1/2 rounded-lg shadow-lg"
            />
            <div className="md:w-1/2">
              <p className="text-gray-600 mb-6">
                テコンドーは華麗で多彩な足技が特長の武道です。<br/>
                北千住道場では伝統的な武道の体の動かし方と現代的なトレーニング方法を組み合わせています。<br/>
                規律、礼節、そして継続的な向上を通じて、生徒一人一人の可能性を最大限に引き出します。
              </p>
              <button className="bg-red-700 text-white px-6 py-2 rounded hover:bg-red-800 transition-colors">
                詳しく見る
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;