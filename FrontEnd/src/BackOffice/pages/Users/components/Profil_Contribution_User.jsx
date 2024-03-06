import React from 'react'

const Profil_Contribution_User = () => {
  return (
    <div class="  my-5 p-5 shadow-lg w-full">
    <h4 class="mb-5 font-semibold">Contribution</h4>
    <div class="max-w-5xl flex mx-auto justify-center items-center">
        <div class="w-1/3">
            <canvas id="donutChart1" class="donut-chart  w-5 h-5"></canvas>
            <p>Contribution  <br />des blogs global</p>
        </div>

        <div class="w-1/3">
            <canvas height="150px" id="donutChart2" class="donut-chart  w-5 h-5"></canvas>
            <p>Contribution  <br />des blogs publiés global</p>
        </div>
        <div class="w-1/3">
            <canvas height="150px" id="donutChart3" class="donut-chart  w-5 h-5"></canvas>
            <p>Contribution  <br />des blogs personnel</p>
        </div>
    </div>

</div>
  )
}

export default Profil_Contribution_User
