const Field = ({ children, error }) => {
    return (
      <div className="flex flex-col gap-2 mb-4">
        {children}
        {error && <small className="italic text-red-500">{error.message}</small>}
      </div>
    );
  };
  
  export default Field;