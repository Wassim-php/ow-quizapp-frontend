

const InfoBox = ({ title, content, borderColor, icon: Icon }) => {
  return (
    <div className={`p-6 bg-white border-l-4 ${borderColor} rounded-lg shadow-md`}>
      <div className="flex items-center space-x-3 mb-2">
        {Icon && <Icon className="w-5 h-5 text-gray-800" />}
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600">{content}</p>
    </div>
  );
};
export default InfoBox;
