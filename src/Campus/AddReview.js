import { useState } from 'react';
import { FiStar, FiSave } from 'react-icons/fi';
import axios from 'axios';

const ReviewForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    course: '',
    level: '',
    review: '',
    ratings: 0,
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (formData.name.length < 3) {
      newErrors.name = 'Name must be at least 3 characters';
    }
    if (!formData.course.trim()) {
      newErrors.course = 'Please enter a course name';
    }
    if (!formData.level.trim()) {
      newErrors.level = 'Please enter your skill level';
    }
    if (formData.review.length < 10 || formData.review.length > 500) {
      newErrors.review = 'Review must be between 10-500 characters';
    }
    if (formData.ratings < 1 || formData.ratings > 5) {
      newErrors.ratings = 'Please select a rating between 1-5 stars';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      await axios.post('http://localhost:5000/api/reviews/', formData);
      
      setShowThankYou(true);
      setFormData({
        name: '',
        course: '',
        level: '',
        review: '',
        ratings: 0,
      });
      
      setTimeout(() => setShowThankYou(false), 5000);
    } catch (error) {
      setErrors({ 
        submit: error.response?.data?.message || 'Submission failed. Please try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRatingChange = (rating) => {
    setFormData({ ...formData, ratings: rating });
    setErrors({ ...errors, ratings: '' });
  };

  return (
    <section className="max-w-2xl mx-auto py-8 px-4">
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
          <FiSave className="text-indigo-600" />
          Share Your Experience
        </h2>

        {showThankYou && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
            Thank you for your valuable feedback! We appreciate your review.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Input */}
          <div>
            <label className="block text-sm font-medium mb-1">Your Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={`w-full p-2 border rounded-lg ${errors.name ? 'border-red-500' : 'border-gray-200'}`}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Course Input */}
          <div>
            <label className="block text-sm font-medium mb-1">Course Name</label>
            <input
              type="text"
              value={formData.course}
              onChange={(e) => setFormData({ ...formData, course: e.target.value })}
              className={`w-full p-2 border rounded-lg ${errors.course ? 'border-red-500' : 'border-gray-200'}`}
              placeholder="Enter course name"
            />
            {errors.course && <p className="text-red-500 text-sm mt-1">{errors.course}</p>}
          </div>

          {/* Level Input */}
          <div>
            <label className="block text-sm font-medium mb-1">Skill Level</label>
            <input
              type="text"
              value={formData.level}
              onChange={(e) => setFormData({ ...formData, level: e.target.value })}
              className={`w-full p-2 border rounded-lg ${errors.level ? 'border-red-500' : 'border-gray-200'}`}
              placeholder="Enter your skill level"
            />
            {errors.level && <p className="text-red-500 text-sm mt-1">{errors.level}</p>}
          </div>

          {/* Rating Input */}
          <div>
            <label className="block text-sm font-medium mb-1">Rating</label>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((rating) => (
                <button
                  type="button"
                  key={rating}
                  onClick={() => handleRatingChange(rating)}
                  className={`p-1 ${formData.ratings >= rating ? 'text-yellow-400' : 'text-gray-300'}`}
                >
                  <FiStar className="w-6 h-6" />
                </button>
              ))}
            </div>
            {errors.ratings && <p className="text-red-500 text-sm mt-1">{errors.ratings}</p>}
          </div>

          {/* Review Textarea */}
          <div>
            <label className="block text-sm font-medium mb-1">Your Review</label>
            <textarea
              value={formData.review}
              onChange={(e) => setFormData({ ...formData, review: e.target.value })}
              className={`w-full p-2 border rounded-lg h-32 ${errors.review ? 'border-red-500' : 'border-gray-200'}`}
              placeholder="Share your learning experience..."
            />
            <div className="flex justify-between text-sm text-gray-500 mt-1">
              <span>{formData.review.length}/500</span>
              {errors.review && <span className="text-red-500">{errors.review}</span>}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              'Submitting...'
            ) : (
              <>
                <FiSave className="w-5 h-5" />
                Submit Review
              </>
            )}
          </button>

          {errors.submit && (
            <p className="text-red-500 text-center mt-3">{errors.submit}</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ReviewForm;