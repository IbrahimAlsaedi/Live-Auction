import React from "react"

const Contact = () => { 
  return (
    <footer className='bg-secondary text-white text-center text-lg-start'>
      <section className='py-4 px-6 border-b border-red-700'>
        <div className='flex justify-center lg:justify-between items-center'>
          <div className='lg:mr-5'>
            <span>Get connected with us on social networks:</span>
          </div>

          <div className='space-x-4'>
            <a href='Facebook.com' className='text-reset hover:text-blue-500'>Facebook</a>
            <a href='Twitter.com' className='text-reset hover:text-blue-500'>Twitter</a>
            <a href='Google.com' className='text-reset hover:text-blue-500'>Google</a>
            <a href='Instagram.com' className='text-reset hover:text-blue-500'>Instagram</a>
            <a href='LinkedIn.com' className='text-reset hover:text-blue-500'>LinkedIn</a>
            <a href='GitHub.com' className='text-reset hover:text-blue-500'>GitHub</a>
          </div>
        </div>
      </section>

      <section className='py-5'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            <div className='mb-4'>
              <h6 className='text-lg font-semibold mb-2'>Live Auctions</h6>
              <p>
              Live Auctions Inc. is your gateway to the world of extraordinary finds. We specialize in live auctions, combining the excitement of in-person events with the convenience of online bidding. Since 2023.              </p>
            </div>

            <div className='mb-4'>
              <h6 className='text-lg font-semibold mb-2'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Live bidding 
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Upcoming auctions
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Rare auctions
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  auctions history
                </a>
              </p>
            </div>

            <div className='mb-4'>
              <h6 className='text-lg font-semibold mb-2'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Jobs
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Report
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </div>

            <div className='mb-4'>
              <h6 className='text-lg font-semibold mb-2'>Contact</h6>
              <p>Taif , KSA</p>
              <p>info@example.com</p>
              <p>+966 234 567 88</p>
              <p>+966 234 567 89</p>
            </div>
          </div>
        </div>
      </section>

      <div className='py-4' style={{ backgroundColor: 'bg-secondary' }}>
        <div className='text-center'>
          ©2023 Copyright:Live Auction
        </div>
      </div>
    </footer>
  );
}
export default Contact;
