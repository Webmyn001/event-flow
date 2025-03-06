const Button = ({ className, ...props }) => (
    <button 
      {...props}
      className={`py-2 px-6 rounded-lg font-medium transition-all ${className}`}
    />
  )
  
  export default Button