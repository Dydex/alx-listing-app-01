import { ReviewProps } from '@/interfaces';

const ReviewSection: React.FC<{ reviews: ReviewProps[] }> = ({ reviews }) => {
  return (
    <div className=' container mt-8 mb-16 pt-6 mx-auto sm:mx-0 w-[97%] sm:w-[62%] border-t border-b border-[#E6E6E6]'>
      <div className='w-[95%] mt-8 mb-8 '>
        <h3 className='text-2xl mb-8 font-semibold'>Reviews</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {reviews.map((item, index) => (
            <div key={index} className=' pb-4 mb-4'>
              <div className='flex items-center mb-6'>
                <img
                  src={item.avatar}
                  alt={item.name}
                  className='w-12 h-12 rounded-full mr-4'
                />
                <div>
                  <p className='font-bold'>{item.name}</p>
                  <p className='text-yellow-500'>{item.rating} stars</p>
                </div>
              </div>
              <p>{item.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
