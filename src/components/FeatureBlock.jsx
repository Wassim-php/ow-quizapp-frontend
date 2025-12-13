const FeatureBlock = ({ title, children, borderColor }) => {
  return (
    <div className={`p-6 bg-white border-t-4 ${borderColor} rounded-lg shadow-md h-full`}>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      {children}
    </div>
  );
};
export default FeatureBlock;