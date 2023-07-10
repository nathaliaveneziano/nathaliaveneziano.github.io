import './shapes.css';

function Shape() {
  return (
    <div className="shapes">
      <svg
        id="wave"
        viewBox="0 0 1440 490"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1">
        <path
          fill="#000"
          d="M0,98L21.8,114.3C43.6,131,87,163,131,204.2C174.5,245,218,294,262,334.8C305.5,376,349,408,393,367.5C436.4,327,480,212,524,155.2C567.3,98,611,98,655,130.7C698.2,163,742,229,785,212.3C829.1,196,873,98,916,122.5C960,147,1004,294,1047,310.3C1090.9,327,1135,212,1178,163.3C1221.8,114,1265,131,1309,138.8C1352.7,147,1396,147,1440,171.5C1483.6,196,1527,245,1571,253.2C1614.5,261,1658,229,1702,245C1745.5,261,1789,327,1833,310.3C1876.4,294,1920,196,1964,155.2C2007.3,114,2051,131,2095,187.8C2138.2,245,2182,343,2225,343C2269.1,343,2313,245,2356,236.8C2400,229,2444,310,2487,343C2530.9,376,2575,359,2618,302.2C2661.8,245,2705,147,2749,98C2792.7,49,2836,49,2880,40.8C2923.6,33,2967,16,3011,8.2C3054.5,0,3098,0,3120,0L3141.8,0L3141.8,490L3120,490C3098.2,490,3055,490,3011,490C2967.3,490,2924,490,2880,490C2836.4,490,2793,490,2749,490C2705.5,490,2662,490,2618,490C2574.5,490,2531,490,2487,490C2443.6,490,2400,490,2356,490C2312.7,490,2269,490,2225,490C2181.8,490,2138,490,2095,490C2050.9,490,2007,490,1964,490C1920,490,1876,490,1833,490C1789.1,490,1745,490,1702,490C1658.2,490,1615,490,1571,490C1527.3,490,1484,490,1440,490C1396.4,490,1353,490,1309,490C1265.5,490,1222,490,1178,490C1134.5,490,1091,490,1047,490C1003.6,490,960,490,916,490C872.7,490,829,490,785,490C741.8,490,698,490,655,490C610.9,490,567,490,524,490C480,490,436,490,393,490C349.1,490,305,490,262,490C218.2,490,175,490,131,490C87.3,490,44,490,22,490L0,490Z"></path>
        <path
          fill="#000"
          d="M0,343L21.8,285.8C43.6,229,87,114,131,89.8C174.5,65,218,131,262,187.8C305.5,245,349,294,393,318.5C436.4,343,480,343,524,310.3C567.3,278,611,212,655,196C698.2,180,742,212,785,212.3C829.1,212,873,180,916,171.5C960,163,1004,180,1047,171.5C1090.9,163,1135,131,1178,138.8C1221.8,147,1265,196,1309,179.7C1352.7,163,1396,82,1440,81.7C1483.6,82,1527,163,1571,171.5C1614.5,180,1658,114,1702,122.5C1745.5,131,1789,212,1833,277.7C1876.4,343,1920,392,1964,351.2C2007.3,310,2051,180,2095,163.3C2138.2,147,2182,245,2225,245C2269.1,245,2313,147,2356,163.3C2400,180,2444,310,2487,326.7C2530.9,343,2575,245,2618,228.7C2661.8,212,2705,278,2749,318.5C2792.7,359,2836,376,2880,318.5C2923.6,261,2967,131,3011,73.5C3054.5,16,3098,33,3120,40.8L3141.8,49L3141.8,490L3120,490C3098.2,490,3055,490,3011,490C2967.3,490,2924,490,2880,490C2836.4,490,2793,490,2749,490C2705.5,490,2662,490,2618,490C2574.5,490,2531,490,2487,490C2443.6,490,2400,490,2356,490C2312.7,490,2269,490,2225,490C2181.8,490,2138,490,2095,490C2050.9,490,2007,490,1964,490C1920,490,1876,490,1833,490C1789.1,490,1745,490,1702,490C1658.2,490,1615,490,1571,490C1527.3,490,1484,490,1440,490C1396.4,490,1353,490,1309,490C1265.5,490,1222,490,1178,490C1134.5,490,1091,490,1047,490C1003.6,490,960,490,916,490C872.7,490,829,490,785,490C741.8,490,698,490,655,490C610.9,490,567,490,524,490C480,490,436,490,393,490C349.1,490,305,490,262,490C218.2,490,175,490,131,490C87.3,490,44,490,22,490L0,490Z"></path>
        <path
          fill="#000"
          d="M0,245L21.8,236.8C43.6,229,87,212,131,228.7C174.5,245,218,294,262,285.8C305.5,278,349,212,393,228.7C436.4,245,480,343,524,326.7C567.3,310,611,180,655,163.3C698.2,147,742,245,785,310.3C829.1,376,873,408,916,367.5C960,327,1004,212,1047,171.5C1090.9,131,1135,163,1178,196C1221.8,229,1265,261,1309,253.2C1352.7,245,1396,196,1440,196C1483.6,196,1527,245,1571,277.7C1614.5,310,1658,327,1702,310.3C1745.5,294,1789,245,1833,253.2C1876.4,261,1920,327,1964,343C2007.3,359,2051,327,2095,326.7C2138.2,327,2182,359,2225,375.7C2269.1,392,2313,392,2356,367.5C2400,343,2444,294,2487,261.3C2530.9,229,2575,212,2618,204.2C2661.8,196,2705,196,2749,179.7C2792.7,163,2836,131,2880,138.8C2923.6,147,2967,196,3011,212.3C3054.5,229,3098,212,3120,204.2L3141.8,196L3141.8,490L3120,490C3098.2,490,3055,490,3011,490C2967.3,490,2924,490,2880,490C2836.4,490,2793,490,2749,490C2705.5,490,2662,490,2618,490C2574.5,490,2531,490,2487,490C2443.6,490,2400,490,2356,490C2312.7,490,2269,490,2225,490C2181.8,490,2138,490,2095,490C2050.9,490,2007,490,1964,490C1920,490,1876,490,1833,490C1789.1,490,1745,490,1702,490C1658.2,490,1615,490,1571,490C1527.3,490,1484,490,1440,490C1396.4,490,1353,490,1309,490C1265.5,490,1222,490,1178,490C1134.5,490,1091,490,1047,490C1003.6,490,960,490,916,490C872.7,490,829,490,785,490C741.8,490,698,490,655,490C610.9,490,567,490,524,490C480,490,436,490,393,490C349.1,490,305,490,262,490C218.2,490,175,490,131,490C87.3,490,44,490,22,490L0,490Z"></path>
        <path
          fill="#000"
          d="M0,147L21.8,130.7C43.6,114,87,82,131,89.8C174.5,98,218,147,262,138.8C305.5,131,349,65,393,32.7C436.4,0,480,0,524,24.5C567.3,49,611,98,655,122.5C698.2,147,742,147,785,138.8C829.1,131,873,114,916,155.2C960,196,1004,294,1047,302.2C1090.9,310,1135,229,1178,236.8C1221.8,245,1265,343,1309,375.7C1352.7,408,1396,376,1440,318.5C1483.6,261,1527,180,1571,179.7C1614.5,180,1658,261,1702,318.5C1745.5,376,1789,408,1833,416.5C1876.4,425,1920,408,1964,375.7C2007.3,343,2051,294,2095,269.5C2138.2,245,2182,245,2225,204.2C2269.1,163,2313,82,2356,65.3C2400,49,2444,98,2487,130.7C2530.9,163,2575,180,2618,179.7C2661.8,180,2705,163,2749,204.2C2792.7,245,2836,343,2880,351.2C2923.6,359,2967,278,3011,261.3C3054.5,245,3098,294,3120,318.5L3141.8,343L3141.8,490L3120,490C3098.2,490,3055,490,3011,490C2967.3,490,2924,490,2880,490C2836.4,490,2793,490,2749,490C2705.5,490,2662,490,2618,490C2574.5,490,2531,490,2487,490C2443.6,490,2400,490,2356,490C2312.7,490,2269,490,2225,490C2181.8,490,2138,490,2095,490C2050.9,490,2007,490,1964,490C1920,490,1876,490,1833,490C1789.1,490,1745,490,1702,490C1658.2,490,1615,490,1571,490C1527.3,490,1484,490,1440,490C1396.4,490,1353,490,1309,490C1265.5,490,1222,490,1178,490C1134.5,490,1091,490,1047,490C1003.6,490,960,490,916,490C872.7,490,829,490,785,490C741.8,490,698,490,655,490C610.9,490,567,490,524,490C480,490,436,490,393,490C349.1,490,305,490,262,490C218.2,490,175,490,131,490C87.3,490,44,490,22,490L0,490Z"></path>
      </svg>
    </div>
  );
}

export default Shape;
