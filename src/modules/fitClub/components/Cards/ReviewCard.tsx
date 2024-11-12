import React from 'react';

interface ReviewCardProps {
  text: string;
  rating: number;
  reviewerName: string;
  reviewerJob: string;
  reviewerImage: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  text,
  rating,
  reviewerName,
  reviewerJob,
  reviewerImage,
}) => {
  return (
    <div className="md:w-full mb-8">
      <p className="text-xl mb-4">{text}</p>
      <div className="flex items-center gap-1 mb-6">
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            className={`text-2xl ${
              index < Math.floor(rating)
                ? 'text-primary-light'
                : index === Math.floor(rating) && rating % 1 !== 0
                ? 'text-primary-light/50'
                : 'text-gray-400'
            }`}
          >
            ★
          </span>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <img
          src={reviewerImage}
          alt={reviewerName}
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h4 className="text-lg font-bold">{reviewerName}</h4>
          <p className="text-sm text-gray-400">{reviewerJob}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
