import React from 'react'

const Faq = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-5 bg-white min-h-sceen">
	<div class="flex flex-col items-center">
		<h2 class="font-bold text-xl tracking-tight mt-4">
			FAQ
		</h2>
		<p class="text-neutral-500 text-xl mt-4">
			Frequenty asked questions
		</p>
	</div>
	<div className="grid divide-y divide-neutral-200 mx-auto my-8">
		<div className="py-3">
			<details className="group">
				<summary className="flex justify-between items-center font-medium cursor-pointer list-none">
					<span className="text-blue-900">What types of used cars do you offer?</span>
					<span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
				</summary>
				<p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                We offer a wide range of used cars, including sedans, SUVs, trucks, and more. Our inventory is
                carefully curated to ensure quality and diversity.
				</p>
			</details>
		</div>
		<div className="py-3">
			<details className="group">
				<summary className="flex justify-between items-center font-medium cursor-pointer list-none">
					<span className="text-blue-900">What is the condition of your used cars?</span>
					<span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
				</summary>
				<p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                Our used cars undergo a rigorous inspection process to ensure they meet high-quality standards. We
                provide detailed vehicle inspection summary along with transparent history available with the
                authorized centers.
				</p>
			</details>
		</div>
		<div className="py-3">
			<details className="group">
				<summary className="flex justify-between items-center font-medium cursor-pointer list-none">
					<span className="text-blue-900">Do you offer any warranties on your used cars?</span>
					<span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
				</summary>
				<p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                The specific details and duration of the warranty can vary depending on the make, model, and age of
                the vehicle.
				</p>
			</details>
		</div>
		<div className="py-3">
			<details className="group">
				<summary className="flex justify-between items-center font-medium cursor-pointer list-none">
					<span className="text-blue-900">Can I schedule a test drive?</span>
					<span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
				</summary>
				<p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                We encourage all potential buyers to experience the vehicle before finalizing on the deal, our
                experienced team will make you comfort to understand the detailed features and spec of the vehicle.
				</p>
			</details>
		</div>
		<div className="py-3">
			<details className="group">
				<summary className="flex justify-between items-center font-medium cursor-pointer list-none">
					<span className="text-blue-900">Do you provide financing options?</span>
					<span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
				</summary>
				<p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                Yes, we offer a range of financing options tailored to fit your budget. Our experienced finance
                associates will work with you to find the best financing solution for your needs. We have association
                with several banks and private DSA to provide personalized experience basis your financial history.
				</p>
			</details>
		</div>
		<div className="py-3 mb-3">
			<details className="group">
				<summary className="flex justify-between items-center font-medium cursor-pointer list-none">
					<span className="text-blue-900">What steps do you take to ensure the cleanliness and safety of your vehicles?</span>
					<span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                We thoroughly clean and sanitize all our vehicles before they are put up for sale. Additionally, we
                follow strict inspection and scanner guidelines to ensure the well-being of our customers.
				</p>
			</details>
		</div>
	</div>
	</div>
  )
}

export default Faq