function Alert({ 
  type = "info",           
  message,
  width                             
}) {

  return (
    <div 
      className={`alert alert-${type} text-center mb-4`}
      role="alert"
      style={{ width: width, maxWidth: '90%', margin: '0 auto 20px' }}
    >
        {message}
    </div>
  );
}

export default Alert;