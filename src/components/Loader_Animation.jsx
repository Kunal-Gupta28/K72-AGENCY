import { useGSAP } from '@gsap/react'
import gsap from 'gsap';



const Loader_Animation = () => {

    const t1 = gsap.timeline()

    useGSAP(()=>{
        t1.from('.loader',{
            y: "-100%",
            stagger:{
                amount: -0.3,
            }
        })
    })

return (
    <section className='h-screen w-screen fixed top-0 left-0 -z-[100]'>

        {Array.from({ length: 5 }).map((_, i) => (
            <div
                key={i}
                className='loader'
                style={{
                    width: '20vw',
                    height: '100vh',
                    background: 'black',
                    display: 'inline-block',
                }}
            />
        ))}

    </section>
);
}

export default Loader_Animation
