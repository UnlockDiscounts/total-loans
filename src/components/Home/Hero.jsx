import heroImage from "../../assets/images/hero-image.png";
import heropage2 from "../../assets/images/heroimage.png";

function Hero() {

  return (

<section className="relative w-full overflow-hidden bg-[#E60318] lg:bg-white lg:h-[861px]">


{/* MOBILE BACKGROUND IMAGE */}
<div className="block lg:hidden absolute inset-0 w-full h-full z-0">

<img
src={heropage2}
alt="Hero mobile"
className="w-full h-full object-cover"
/>

</div>



{/* DESKTOP HERO */}
<div className="hidden lg:block">


{/* gradient background shape */}
<div className="
absolute
w-[1050px]
h-[861px]
top-[-80px]
left-0
rounded-tr-[190px]
rounded-br-[1500px]
blur-[2px]
z-10
bg-[linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2)),linear-gradient(270deg,#E60318_14.9%,#1E2A38_100%)]
">
</div>



{/* desktop hero image increased height */}
<div className="
absolute
top-[10px]
left-[490px]
w-[1170px]
h-[860px]
rounded-bl-[500px]
overflow-hidden
z-20
">

<img
src={heroImage}
alt="Hero desktop"
className="w-full h-full object-cover"
/>

</div>



{/* desktop text */}
<div className="relative z-30 px-6 lg:px-12">

<div className="
flex
flex-col
gap-6
max-w-[703px]
mt-[110px]
ml-[69px]
">

<h1 className="
text-[#EDF6F5]
text-4xl
lg:text-[65px]
font-extrabold
leading-tight
lg:leading-[1.4]
">
Looking for the Right Loan Solution?
</h1>


<p className="
text-[#EDF6F5]
text-[32px]
font-medium
leading-[1.4]
">
We Connect you with trusted banks to find the right loan easily.
</p>


<button className="
w-[194px]
h-[60px]
px-8
py-3
bg-[#E60318]
text-white
rounded-[8px]
font-semibold
text-[20px]
shadow-[0px_4px_20px_0px_#0000001A]
border-2
border-transparent
hover:bg-transparent
hover:border-white
transition
duration-300
">
Get Started
</button>

</div>

</div>


</div>



{/* MOBILE TEXT */}
<div className="relative lg:hidden w-full h-[480px] z-20">


<h1 className="
absolute
w-[396px]
left-[5px]
top-[318px]
font-extrabold
text-[24px]
leading-[33px]
text-white
">
Looking for the Right Loan Solutions?
</h1>



<p className="
absolute
w-[297px]
left-[5px]
top-[393px]
font-medium
text-[14px]
leading-[19px]
text-[#EDF6F5]
">
We Connect you with trusted banks to find the right loan easily.
</p>



<button className="
absolute
left-4
bottom-1
w-[180px]
h-[35px]
bg-[#E60318]
text-white
rounded-[8px]
font-semibold
text-base
shadow-[0px_4px_20px_0px_#0000001A]
">
Get Started
</button>


</div>


</section>

  );
}

export default Hero;  