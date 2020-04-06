export const projects = [
	{
		number: 1,
		image: 'qualityhub.png',
		thumbnail: '#096dd9',
		iconColor: 'white',
		fields: {
			Project: 'QualityHub + InterviewQ',
			Role: 'Full-Stack Web Developer',
			'Front-End Stack':
				'ReactJS | React Router | Apollo Client | GraphQL | axios | date-fns | jwt-decode | pusher-js | socket.io',
			'Back-End Stack':
				'Node.js | Express | graphql-yoga | Prisma | Apollo Server | Apollo Federation | bcryptjs | dotenv | jsonwebtoken | Stripe | jest | supertest',
			'Gateway Stack': 'Apollo Server | Apollo Gateway | GraphQL',
			Description:
				'Gig economy hub app connecting job seekers with career coaches in a variety of quality assessment areas',
			Team:
				'9-person remote cross-functional team with two UX Designers and six other Full-Stack Developers, communicating via Slack and Zoom',
		},
		responsibilities: [
			'Iterated features for all aspects of project',
			'Implemented Apollo Client state management system for declarative and precise data fetching and caching',
			'Implemented Cloudinary technology for Avatar image upload functionality',
			'Implemented History and Coach Report pages and functionality on InterviewQ microservice for improved user experience',
			'Built landing page for mobile responsiveness',
			'Utilized Prisma + GraphQL-Yoga and Apollo Federation and Apollo Gateway to connect and coordinate data from back-end microservices',
			'Built out InterviewQ back-end GraphQL API according to data models',
			'Employed PostgresQL database using Prisma ORM to store and manage data',
		],
		// stack: {
		// 	'Front-End Stack':
		// 		'ReactJS | React Router | Apollo Client | GraphQL | axios | date-fns | jwt-decode | pusher-js | socket.io',
		// 	'Back-End Stack':
		// 		'Node.js | Express | graphql-yoga | Prisma | Apollo Server | Apollo Federation | bcryptjs | dotenv | jsonwebtoken | Stripe | jest | supertest',
		// 	'Gateway Stack': 'Apollo Server | Apollo Gateway | GraphQL',
		// },
		site: 'https://explorequality.com/',
		links: [
			{
				icon: ['fab', 'youtube'],
				text: 'Demo',
				url: 'https://youtu.be/mW-hJxlnVwk?t=274',
			},
			{
				icon: ['fab', 'youtube'],
				text: 'Marketing',
				url: 'https://youtu.be/xksru1VUZd0',
			},
			{
				icon: ['fab', 'github'],
				text: 'Code',
				url: 'https://github.com/TheCovey',
			},
		],
	},
	{
		number: 2,
		image: 'icnst.png',
		thumbnail: '#83c341',
		iconColor: '#121212',
		fields: {
			Project: 'International Child Nutrition Status Tracking',
			Role: 'Front-End Framework Developer and Node Back-End Developer',
			'Front-End Stack':
				'ReactJS | React Router | Context API | React Hooks | axios | recharts | styled-components',
			'Back-End Stack':
				'Node.js | Express | bcryptjs | cors | dotenv | helmet | jsonwebtoken | knex | knex-cleaner | pg',
			Description:
				'App tracking and organizing data for global child malnutrition nonprofits',
			Team:
				'4-person remote cross-functional team with one Web UI Developer and two other Front-End Developers, communicating via Slack and Zoom',
		},
		// stack: {
		// 	'Front-End Stack':
		// 		'ReactJS | React Router | Context API | React Hooks | axios | recharts | styled-components',
		// 	'Back-End Stack':
		// 		'Node.js | Express | bcryptjs | cors | dotenv | helmet | jsonwebtoken | knex | knex-cleaner | sqlite (development) | nodemon (development) | pg (Production)',
		// },
		responsibilities: [
			'Coordinated front-end team of Web UI Developer and Front-End Developers',
			'Implemented Context API to centralize state management',
			'Built a Web API with functional endpoints to manage data for front-end application',
			'Employed REST architectural pattern for back-end API and provided data persistence',
			'Incorporated authentication and authorization services in API for security',
		],
		site: 'https://icnst.netlify.com/',
		links: [
			{
				icon: ['fab', 'github'],
				text: 'Front-End Code',
				url: 'https://github.com/ICNST/FE/tree/jonathan-ho',
			},
			{
				icon: ['fab', 'github'],
				text: 'Back-End Code',
				url: 'https://github.com/Jonathan-YungHsin-Ho/bw3-backend',
			},
		],
	},
	{
		number: 3,
		image: 'rideforlife.png',
		thumbnail: '#536d3e',
		iconColor: 'white',
		fields: {
			Project: 'Ride for Life with Safe',
			Role: 'Node Back-End Developer',
			'Back-End Stack':
				'Node.js | Express | bcryptjs | cloudinary | cors | dotenv | express-fileupload | helmet | jsonwebtoken | knex | knex-cleaner | twilio | cross-env | jest | nodemon | supertest | pg',
			Description:
				'App connecting pregnant Uganda women with nearest motorcycle ambulances for health facility access',
			'Team Role':
				'5-person remote cross-functional team with two Web UI Developers and two Front-End Developers, communicating via Slack and Zoom',
		},
		responsibilities: [
			'Built a Web API with functional endpoints in coordination with the front-end team',
			'Employed REST architectural pattern for API and provided data persistence',
			'Incorporated authentication and authorization services for security',
			'Implemented automated end-to-end tests using Jest and Supertest',
		],
		// stack: {
		// 	'Back-End Stack':
		// 		'Node.js | Express | bcryptjs | cloudinary | cors | dotenv | express-fileupload | helmet | jsonwebtoken | knex | knex-cleaner | twilio | cross-env | jest | nodemon | supertest | pg',
		// },
		site: 'https://rfl.netlify.com/',
		links: [
			{
				icon: ['fab', 'youtube'],
				text: 'Demo',
				url: 'https://youtu.be/GQoPMRK_eyU?t=250',
			},
			{
				icon: ['fab', 'github'],
				text: 'Code',
				url: 'https://github.com/RideforLife/',
			},
		],
	},
	{
		number: 4,
		image: 'jambdatreasurehunt.png',
		thumbnail: '#7bb369',
		// 'thumbnail-border': '#14121f',
		iconColor: '#121212',
		fields: {
			Project: 'JAMbda Treasure Hunt',
			Role: 'Front-End Framework Developer',
			'Front-End Stack':
				'ReactJS | React Router | Context API | axios | styled-components',
			Description:
				'Multi-User Dungeon RPG where players explore an island maze and compete to solve puzzles, applying computer science principles including: Algorithms and Data Structures, Blockchain, Graph Theory, and Computer Architecture',
			Team:
				'3-person remote cross-functional team with one Django Back-End Developer/Front-End Developer and one Data Scientist, communicating via Slack and Zoom',
		},
		responsibilities: [
			'Developed React web app interacting with game server API and back-end Django database',
			'Implemented Context API to centralize state management',
			'Designed and built game map to dynamically render game graph',
			'Implemented navigation and game logic to handle asynchronous data requests with sleep requirements',
			'Composed custom hooks to access back-end data and game server API endpoints reinforcing DRY code principle',
		],
		// stack: {
		// 	'Front-End Stack':
		// 		'ReactJS | React Router | Context API | axios | styled-components',
		// },
		site: 'https://teamjam.netlify.com/',
		links: [
			{
				icon: ['fab', 'youtube'],
				text: 'Demo 1',
				url: 'https://youtu.be/Tmc3t5Y7Hhs?t=1044',
			},
			{
				icon: ['fab', 'youtube'],
				text: 'Demo 2',
				url: 'https://youtu.be/4Sdw_SOQ4HU',
			},
			{
				icon: ['fab', 'github'],
				text: 'Code',
				url: 'https://github.com/Team-JAM/',
			},
		],
	},
	{
		number: 5,
		image: 'lambdalegend2.png',
		thumbnail: '#bb1333',
		iconColor: 'white',
		fields: {
			Project: 'The Legend of Lambda',
			Role: 'Front-End Framework Developer',
			'Front-End Stack':
				'ReactJS | React Router | Context API | axios | styled-components | NES.css | pusher-js',
			Description:
				'Multi-User Dungeon RPG where players collect questions preparing them for technical interviews',
			Team:
				'4-person remote cross-functional team with two Back-End Developers and one other Front-End Developer, communicating via Slack and Zoom',
		},
		responsibilities: [
			'Developed React web app interacting with Django back-end game server',
			'Implemented Context API to centralize state management',
			'Built game components to dynamically render game map and avatar',
			'Implemented mouse and keyboard control for improved user experience',
			'Built Avatar updating functionality for user customization',
			'Leveraged PusherJS technology for real-time in-game chat functionality',
			'Designed project for mobile responsiveness',
		],
		// stack: {
		// 	'Front-End Stack':
		// 		'ReactJS | React Router | Context API | axios | styled-components | NES.css | pusher-js',
		// },
		site: 'https://lambdalegend.netlify.com/',
		links: [
			{
				icon: ['fab', 'youtube'],
				text: 'Demo',
				url: 'https://youtu.be/Y3tNF6Y1f0k?t=28',
			},
			{
				icon: ['fab', 'github'],
				text: 'Code',
				url: 'https://github.com/CS25-BuildWeek-JJTBN/',
			},
		],
	},
	{
		number: 6,
		image: 'createadventure.png',
		thumbnail: '#ff0000',
		iconColor: '#121212',
		fields: {
			Project: 'Create Your Own Adventure',
			Award:
				'Best Overall out of 30 submissions for Lambda Winter 2020 30-Hour Hackathon (estimated 150-200 participants working on 30+ projects)',
			Role: 'Front-End Developer',
			'Front-End Stack':
				'ReactJS | React Router | React Hooks | axios | d3 | styled-components | modali',
			Description:
				'App platform for collaboratively creating interactive stories',
			Team:
				'8-person web development team with three Back-End Developers and four other Front-End Developers',
		},
		responsibilities: [
			'Designed and built front-end team page to resemble classic book covers',
			'Designed and built story components to resemble book pages',
		],
		// stack: {
		// 	'Front-End Stack':
		// 		'ReactJS | React Router | React Hooks | axios | d3 | styled-components | modali',
		// },
		site: 'https://createadventure.netlify.com/',
		links: [
			{
				icon: ['fab', 'youtube'],
				text: 'Marketing',
				url: 'https://youtu.be/aXe9Fm_1oUg',
			},
			{
				icon: ['fab', 'github'],
				text: 'Code',
				url: 'https://github.com/Lambda-Hackathon-2020-Git-Adventure/',
			},
		],
	},
	{
		number: 7,
		image: 'githired.png',
		thumbnail: 'silver',
		// 'thumbnail-border': '#14121f',
		iconColor: '#121212',
		fields: {
			Project: 'GitHired',
			Type: 'Personal project; designed and built ReactJS app',
			'Front-End Stack': 'ReactJS | React Redux | React Hooks | axios | thunk',
			Description:
				'App providing information regarding software development jobs via GitHub Jobs API',
		},
		site: 'https://git-hired.netlify.com/',
		links: [
			{
				icon: ['fab', 'github'],
				text: 'Code',
				url:
					'https://github.com/Jonathan-YungHsin-Ho/React-Redux-App/tree/jonathan-ho/github-jobs',
			},
		],
	},
	{
		number: 8,
		image: 'brewery.png',
		thumbnail: '#ffb900',
		iconColor: '#121212',
		fields: {
			Project: 'Find A Brewery!',
			Type: 'Personal project; designed and built ReactJS app',
			'Front-End Stack': 'ReactJS | React Redux | React Hooks | axios | thunk',
			Description:
				'App providing searchable information regarding American breweries via Open Brewery API',
		},
		site: 'https://findabrewery.netlify.com/',
		links: [
			{
				icon: ['fab', 'github'],
				text: 'Code',
				url: 'https://github.com/Jonathan-YungHsin-Ho/open-brewery-app',
			},
		],
	},
];
