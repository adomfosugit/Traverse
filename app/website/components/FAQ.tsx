'use client';
import Faq from 'react-faq-component';
import faq from '../data/faq';

const FAQ = () => {
  return (
    <div id="faq" className="mx-6 mt-16 bg-yellow-500">
      <Faq
        data={faq}
        styles={{
          bgColor: 'white',
          titleTextColor: 'black',
          rowTitleColor: 'black',
          rowTitleTextSize: 'large',
          rowContentColor: '#6b7280',
          rowContentTextSize: '16px',
          rowContentPaddingTop: '10px',
          rowContentPaddingBottom: '10px',
          rowContentPaddingLeft: '25px',
          rowContentPaddingRight: '25px',
          arrowColor: '#9ca3af',
        }}
        config={{
          animate: true,
        }}
      />
    </div>
  );
};

export default FAQ;
