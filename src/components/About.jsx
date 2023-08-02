import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>

        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    About
                </p>
            </div>

            <p className='text-xl mt-20 '>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem labore suscipit dolorum veniam maxime? Facere vero voluptatibus incidunt ut distinctio consequatur eaque voluptas tenetur deleniti ratione tempore consectetur optio exercitationem nam, doloremque ex eum excepturi maiores veritatis dignissimos cumque ipsa, dolor aperiam explicabo. Corrupti molestias, hic soluta veniam in dolor!
            </p>

            <br />

            <p className='text-xl'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptates non minus dignissimos facere illum temporibus ex quaerat saepe architecto tempora provident hic corporis tenetur aperiam est laudantium quasi excepturi aspernatur harum in, optio dolorum suscipit? Totam ipsum dolor quos illum blanditiis molestias asperiores eaque? Hic libero suscipit eaque repellat.
            </p>
        </div>
    </div>
  )
}

export default About