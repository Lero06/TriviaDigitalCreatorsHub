function QuestionBox({ question }) {
  return (
    <div 
      className="card bg-primary bg-opacity-10 border-primary mb-4 my-5 shadow-sm"
      style={{ 
        width: '1300px',
        marginLeft: 'auto', 
        marginRight: 'auto' 
      }}
    >
      <div className="card-body p-4">
        <h4 className="card-title text-center mb-0">{question}</h4>
      </div>
    </div>
  )
}

export default QuestionBox