import React from 'react';
import Image from 'next/image';

export const ProjectsSection = () => {
	return (
		<section id="work" className="py-12 sm:py-20 px-4 bg-[#161B22] scroll-mt-20">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center text-white">
					Featured Projects
				</h2>

				<div className="space-y-8 sm:space-y-12">
					{[
						{
							title: 'Zero-Construction Website',
							description:
								'Built a responsive website to showcase construction services and handle customer inquiries. Used HTML, CSS, and JavaScript for the frontend, and Java (Servlets) for backend processing. Customer messages are validated and sent directly to the company via email using the JavaMail API, enabling quick communication without database storage.',
							metrics: {
								performance: 98,
								accessibility: 100,
								seo: 100,
							},
							techDetails: ['HTML', 'CSS', 'JSON', 'API-FORMS'],
							image: '/code.jpg',
							link: 'https://zeroconstructions.netlify.app/',
						},
						{
							title: 'To-Do List App',
							description:
								'Built a responsive to-do list app using Angular, HTML, CSS, Bootstrap, and Material Symbols. The app supports adding, editing, deleting, and marking tasks as complete. Implemented a smooth dark/light mode toggle using Angular state and dynamic class binding. Features include task management with real-time updates, responsive design, and modern UI icons. Designed with a clean layout and enhanced accessibility across devices.',
							metrics: {
								performance: 95,
								accessibility: 98,
								seo: 100,
							},
							techDetails: ['HTML', 'CSS', 'JAVASCRIPT', 'ANGULAR', 'BOOTSTRAP'],
							image: '/code.jpg',
							link: 'https://basictodo-list.netlify.app/',
						},
					].map((project) => (
						<div key={project.title} className="bg-[#21262D] rounded-lg overflow-hidden">
							<div className="grid grid-cols-1 lg:grid-cols-2">
								<div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
									<h3 className="text-xl sm:text-2xl font-bold text-white">{project.title}</h3>
									<p className="text-sm sm:text-base text-gray-400">{project.description}</p>

									<div>
										<h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-white">
											Technical Implementation
										</h4>
										<ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base">
											{project.techDetails.map((detail) => (
												<li key={detail} className="flex items-center gap-2">
													<span className="text-green-400">▹</span>
													<span className="text-gray-300">{detail}</span>
												</li>
											))}
										</ul>
									</div>

									{/* View Project Button */}
									<div className="pt-4">
										<a
											href={project.link}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base font-medium py-2 px-4 rounded transition-all"
										>
											View Project
										</a>
									</div>
								</div>

								<div className="relative h-full min-h-[300px] lg:min-h-full">
									<Image
										src={project.image}
										alt={project.title}
										fill
										className="object-cover"
										sizes="(max-width: 1024px) 100vw, 50vw"
									/>
									<div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-[#21262D] via-transparent to-transparent lg:via-[#21262D]/20 lg:to-[#21262D]/40" />
								</div>
							</div>
						</div>
					))}
				</div>

				{/* GitHub Link Section */}
				<div className="text-center mt-12">
					<p className="text-white text-lg sm:text-xl mb-4 font-semibold">Want to see more?</p>
					<a
						href="https://github.com/Gauu11"
						className="text-blue-500 hover:underline text-base"
						target="_blank"
						rel="noopener noreferrer"
					>
						Check out my GitHub
					</a>
				</div>
			</div>
		</section>
	);
};
