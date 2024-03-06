import React from 'react'


const BreadCrumb = ({ levels }) => {
  return (
    <div className="min-w-60 max-w-xl pt-5 ">
      <div className="flex gap-2 text-skin-color1 items-center">
        {levels.map((level, index) => (
          <React.Fragment key={index}>
              {index > 0 && <i className="bx bx-chevron-right"></i>}
              <span className='text-2xl'>{level}</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default BreadCrumb
