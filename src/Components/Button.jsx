const Button = (props) => {
  return (
    <div>
      <button
        className="py-[10px] px-[20px] bg-slate-900 rounded-lg text-white"
        onClick={props.onClick}
      >
        {props.value}
      </button>
    </div>
  );
};

export default Button;
