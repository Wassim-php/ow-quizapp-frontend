import React from 'react';

const MobileMockup = () => {
  return (
    <div className="max-w-xs md:max-w-sm lg:max-w-md w-full relative">
      <div className="rounded-[2.5rem] border-[10px] border-black shadow-2xl p-2 bg-gray-800">
        {/* Top bar with speaker/camera notch */}
        <div className="relative h-4 mb-2">
          <div className="absolute inset-x-1/2 top-0 transform -translate-x-1/2 w-10 h-1 bg-gray-700 rounded-full"></div>
        </div>
        
        {/* Screen Content (Simulated based on the screenshot) */}
        <div className="h-[500px] overflow-hidden bg-white rounded-xl">
          {/* Assuming you want to use the actual content from the image: */}
          <div className="p-4">
             {/* Header */}
            <div className="flex justify-between items-center text-sm font-semibold text-gray-700 mb-4">
              <span>Test Results - Practice</span>
              <span className="text-xs text-gray-500">1 min ago</span>
            </div>

            {/* Title */}
            <div className="bg-green-50 p-3 rounded-lg border border-green-200 mb-4">
              <p className="font-semibold text-sm text-green-700">
                Congratulations! You passed the exam!
              </p>
              <p className="text-xs text-green-600">
                You scored 85% on your A320 practice test, passing most of 75. Keep up the great work!
              </p>
            </div>

            {/* Summary */}
            <h3 className="font-bold text-base mb-2">Test Summary</h3>
            <div className="mb-4">
                <p className="text-sm text-gray-500">Score</p>
                <p className="text-2xl font-bold text-green-600">85%</p>
                <div className="h-2 bg-gray-200 rounded-full mt-1">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: '85%' }}></div>
                </div>
            </div>
            
            {/* Total/Correct/Wrong */}
            <div className="flex justify-between text-sm mb-4">
                <div>
                    <p className="text-gray-500">Total Questions</p>
                    <p className="font-semibold text-gray-800">20</p>
                </div>
                <div>
                    <p className="text-gray-500">Answered Questions</p>
                    <p className="font-semibold text-gray-800">20</p>
                </div>
            </div>
             <div className="flex justify-between text-sm mb-4">
                <div>
                    <p className="text-gray-500">Correct Answers</p>
                    <p className="font-semibold text-green-600">
                        <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-1"></span>17
                    </p>
                </div>
                <div>
                    <p className="text-gray-500">Wrong Answers</p>
                    <p className="font-semibold text-red-500">
                        <span className="inline-block w-2 h-2 bg-red-500 rounded-full mr-1"></span>3
                    </p>
                </div>
            </div>
            
            {/* Time Information */}
            <h3 className="font-bold text-base border-t pt-4 mt-4">Time Information</h3>
            <ul className="text-sm space-y-1 mt-2">
                <li><span className="text-gray-500">Time Spent:</span> <span className="font-semibold">10m</span></li>
                <li><span className="text-gray-500">Started At:</span> <span>9/1/2024, 0:52:02 PM</span></li>
                <li><span className="text-gray-500">Finished At:</span> <span>9/1/2024, 1:02:02 PM</span></li>
            </ul>

            {/* Question Details Placeholder */}
            <h3 className="font-bold text-base border-t pt-4 mt-4">Question Details</h3>
            <div className="mt-2 text-sm">
                {/* Simulated Correct/Incorrect/Unanswered Breakdown */}
                 <div className="p-3 bg-gray-100 rounded-lg">
                    <p className="text-green-600 font-medium">Correct (11)</p>
                    <p className="text-red-500 font-medium">Incorrect (5)</p>
                    <p className="text-gray-500 font-medium">Unanswered (4)</p>
                 </div>
            </div>
            <div className="mt-2 text-xs text-center text-gray-500">
                Showing 1 - 20 of 20 questions
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMockup;
