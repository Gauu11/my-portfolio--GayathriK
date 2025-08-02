import React from 'react';

export const SkillsSection = () => {
	return (
<section className="py-12 sm:py-20 bg-[#161B22]">
			<h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-16 text-center text-white">
				Technical Expertise
			</h2>

			<div className="flex justify-center w-full">
  				<div className="grid grid-cols-1 w-fit">

					{[
						{
							category: 'Frontend Development',
							skills: [
								{ name: 'HTML', level: 95 },
								{ name: 'CSS', level: 90 },
								{ name: 'JAVASCRIPT', level: 95 },
								{ name: 'CORE JAVA', level: 80 },
								{ name: 'ANGULAR', level: 75 },
							],
							icon: '🎨',
							color: 'from-blue-500 to-blue-700',
						},
					].map((category) => (
						<div
							key={category.category}
							className="bg-[#21262D] rounded-lg p-6 transform hover:scale-[1.02] transition-all text-white"
						>
							<div className="flex items-center gap-3 mb-6">
								<span className="text-3xl">{category.icon}</span>
								<h3 className="text-xl font-bold">{category.category}</h3>
							</div>
							<div className="space-y-4">
								{category.skills.map((skill) => (
									<div key={skill.name}>
										<div className="flex justify-between text-sm mb-1">
											<span>{skill.name}</span>
											<span className="text-gray-400">{skill.level}%</span>
										</div>
										<div className="h-2 bg-[#30363D] rounded-full overflow-hidden">
											<div
												className={`h-full bg-gradient-to-r ${category.color} animate-expand origin-left`}
												style={{ width: `${skill.level}%` }}
											></div>
										</div>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
