

const Card_User = ({  }) => {
    return (
      <div className="group relative flex justify-center w-11/12  h-36 shadow-lg  mt-5 hover:shadow-none transition peer">
        <div className="pl-4"></div>
        <div className="py-8 px-6">
          <div>
            <h2 className="font-bold cursor-pointer">Andrianina</h2>
            <p className="font-semibold italic">Administrateur</p>
            <span>Andrianina@gmail.com</span>  
          </div>
        </div>
        <div className="absolute bottom-1 right-5 opacity-0 cursor-auto group-hover:opacity-100 group-hover:cursor-pointer transition-all">
          <div className="flex gap-3 justify-between">
            <button className="hover:text-blue-900 text-blue-500 transition-colors">
              <i className="bx bx-pencil"></i>
            </button>
            <button className="hover:text-red-900 text-red-500 transition-colors">
              <i className="bx bx-trash"></i>
            </button>
          </div>
        </div>
      </div>
    );
  };
export default Card_User;
