import { PinContainer } from "../Component/ui/PinContainer";

export default function AnimatedPinDemo() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center">
      <PinContainer
        title="/Cyber Finpro..."
        href="https://cyberfinpro.com/"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[1100px] h-[500px] mb-10 ">
        <h3>Our partner</h3>
          <h3 className="text-3xl !pb-2 !m-0 mb- font-bold  text-slate-100">
            Cyber Finpro
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500">
              At IMIT, we are committed to providing comprehensive cybersecurity
              solutions to protect your digital assets. Our team of experts is
              dedicated to staying ahead of cyber threats and ensuring that you
              are equipped with the knowledge and tools needed to secure your
              digital presence.
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500 " />
          <img className="rounded-3xl"
            src=" https://img.freepik.com/free-photo/medium-shot-man-typing-laptop_23-2149192119.jpg?t=st=1741596823~exp=1741600423~hmac=074089021b2106a38093bc26239ec006548b4d17ac6c8c97b34ff6878f47842d&w=1060"
            alt=""
          />
        </div>
      </PinContainer>
    </div>
  );
}
