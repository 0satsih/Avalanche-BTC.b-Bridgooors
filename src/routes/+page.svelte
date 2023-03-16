<script lang="ts">
	import '../app.css';
	import type { PageData } from './$types';
	import Header from '$lib/layout/Header.svelte';
	import Introduction from '$lib/layout/Introduction.svelte';
	import Footer from '$lib/layout/Footer.svelte';
	import Chart from '$lib/charts/layout/Chart.svelte';
	import Card from '$lib/items/Card.svelte';

	import NewUsers from '$lib/charts/NewUsers.svelte';
	import UserActionsDist from '$lib/charts/UserActionsDist.svelte';
	import ActionsCountDist from '$lib/charts/ActionsCountDist.svelte';
	import DailyUsersActions from '$lib/charts/DailyUsersActions.svelte';
	import DailyUsersActive from '$lib/charts/DailyUsersActive.svelte';
	import DailyTransactions from '$lib/charts/DailyTransactions.svelte';
	import DailyTransactionVol from '$lib/charts/DailyTransactionVol.svelte';
	import DailySwaps from '$lib/charts/DailySwaps.svelte';
	import DailySwapsVol from '$lib/charts/DailySwapsVol.svelte';
	import SwapsInflows from '$lib/charts/SwapsInflows.svelte';
	import SwapsOutflows from '$lib/charts/SwapsOutflows.svelte';
	import ContractsActions from '$lib/charts/ContractsActions.svelte';
	import ContractsUsers from '$lib/charts/ContractsUsers.svelte';
	import ChartLanguage from '$lib/charts/language/ChartLanguage.svelte';

	export let data: PageData;
</script>

<body>
	<div class="flex justify-center 2xl:mx-96 3xl:mx-[550px]">
		<div class="grid grid-cols-9 gap-2">
			<div class="col-start-2	col-span-7">
				<Header />
			</div>
			<div class="row-start-2 col-start-2 col-span-7">
				<Introduction />
			</div>
			<div class="row-start-3 col-start-2 col-span-7 py-4">
				<Card />
			</div>
			<div class="row-start-4 col-start-2 col-span-7">
				<h1 class="text-3xl font-bold py-8 text-center">Summary</h1>
			</div>
			<div class="row-start-5 col-start-2 col-span-7 grid grid-cols-8 gap-2">
				<div class="row-start-1 col-start-2 col-span-6">
					<Chart
						title={'New Users'}
						query_link={'https://flipsidecrypto.xyz/edit/queries/7cc46815-8b8d-47c8-9e46-17485f0475c7/visualizations/f11e006e-95d2-4080-80d1-88ac73c93966'}
						description={'Daily number of new users using the BTC.b bridge'}
					>
						<div class="h-96" slot="figure">
							<NewUsers chart_data={data.NEW_USERS} />
						</div>
					</Chart>
				</div>
				<div class="row-start-2 col-start-2 col-span-6">
					<ChartLanguage
						><p slot="language">
							The number of new users of the BTC.b bridge climbed steadily throughout it's history
							and saw a substantial increase in late 2022, surging from under 10,000 to 20,000 users
							in 4 short months.
						</p></ChartLanguage
					>
				</div>
				<div class="row-start-3 col-start-1 col-span-4">
					<Chart
						title={'User Action Distribution'}
						query_link={'https://flipsidecrypto.xyz/edit/queries/6fbfcf5e-5051-4beb-89f3-58cd79d1cd31/visualizations/bcdd2c3c-cd84-4a2c-8c6b-3cd22878de31'}
						description={'Distribution of number of actions taken by users, partitioned by type'}
					>
						<div class="h-96" slot="figure">
							<UserActionsDist chart_data={data.ACTIONS_DIST} />
						</div>
					</Chart>
				</div>
				<div class="row-start-3 col-start-5 col-span-4">
					<Chart
						title={'Number of Users Distribution'}
						query_link={'https://flipsidecrypto.xyz/edit/queries/9f9c3fde-404c-4eb5-b1b1-55ef86e5dae0/visualizations/6354683f-ac7e-4b29-b80e-b4eee23da02b'}
						description={'Distribution of number of users, partitioned by number of actions'}
					>
						<div class="h-96" slot="figure">
							<ActionsCountDist chart_data={data.ACTIONS_COUNT_DIST} />
						</div>
					</Chart>
				</div>
				<div class="row-start-4 col-start-2 col-span-6">
					<ChartLanguage
						><p slot="language">
							The dominant interaction type that BTC.b users were having were transfers and
							approvals, with very few unwraps, which suggests that when the users bridged their
							token, they rarely unbridged.
							<br /><br />
							Most users took between 2 and 10 actions and over 10 actions which suggests that these
							users are fairly active in interacting with the bridge, few just use it once.
						</p></ChartLanguage
					>
				</div>
				<div class="row-start-5 col-start-2 col-span-6">
					<Chart
						title={'Daily Number of Actions'}
						query_link={'https://flipsidecrypto.xyz/edit/queries/f05e2d1b-83ef-4d73-a22b-0b63f8ada29c/visualizations/b3347636-b180-487f-83ed-18d3f1c3447a'}
						description={'Number of actions taken by users daily, partitioned by action type'}
					>
						<div class="h-96" slot="figure">
							<DailyUsersActions chart_data={data.ACTIONS_DAILY} />
						</div>
					</Chart>
				</div>
				<div class="row-start-6 col-start-2 col-span-6">
					<Chart
						title={'Daily Active Users'}
						query_link={'https://flipsidecrypto.xyz/edit/queries/f05e2d1b-83ef-4d73-a22b-0b63f8ada29c/visualizations/b3347636-b180-487f-83ed-18d3f1c3447a'}
						description={'Number of users daily that have taken at least one action'}
					>
						<div class="h-96" slot="figure">
							<DailyUsersActive chart_data={data.ACTIONS_DAILY} />
						</div>
					</Chart>
				</div>
				<div class="row-start-7 col-start-2 col-span-6">
					<ChartLanguage
						><p slot="language">
							The bridge also saw an increase in activity in late 2022, especially in terms of
							number of actions, which suggests that the same users are interacting with the bridge
							more and more.
						</p></ChartLanguage
					>
				</div>
			</div>
			<div class="row-start-6 col-start-2 col-span-7">
				<h1 class="text-3xl font-bold py-8 text-center">Transactions</h1>
			</div>
			<div class="row-start-7 col-start-2 col-span-7 grid grid-cols-8 gap-2">
				<div class="row-start-1 col-start-2 col-span-6">
					<Chart
						title={'Daily Transactions'}
						query_link={'https://flipsidecrypto.xyz/edit/queries/90ec98ed-4a3c-461c-8f93-e3f73895654e/visualizations/86f8ba1f-d63d-422c-95f8-adeb19524f8b'}
						description={'Daily number of transactions that BTC.b bridge users conducted on Avalanche'}
					>
						<div class="h-96" slot="figure">
							<DailyTransactions chart_data={data.TRANSACTIONS_HISTORY} />
						</div>
					</Chart>
				</div>
				<div class="row-start-2 col-start-2 col-span-6">
					<Chart
						title={'Daily Transaction Volume'}
						query_link={'https://flipsidecrypto.xyz/edit/queries/90ec98ed-4a3c-461c-8f93-e3f73895654e/visualizations/86f8ba1f-d63d-422c-95f8-adeb19524f8b'}
						description={'Daily transaction volume that BTC.b bridge users contributed to on Avalance'}
					>
						<div class="h-96" slot="figure">
							<DailyTransactionVol chart_data={data.TRANSACTIONS_HISTORY} />
						</div>
					</Chart>
				</div>
				<div class="row-start-3 col-start-2 col-span-6">
					<ChartLanguage
						><p slot="language">
							Looking at the Avalanche transaction activity of these BTC.b users, it is evident that
							it was exploding in growth from mid 2021 to mid 2022 and then had a hard plateau in
							May of 2022, when the overall market had a crash. These users seem to be quite active
							overall.
						</p></ChartLanguage
					>
				</div>
			</div>
			<div class="row-start-8 col-start-2 col-span-7">
				<h1 class="text-3xl font-bold py-8 text-center">Swaps</h1>
			</div>
			<div class="row-start-9 col-start-2 col-span-7 grid grid-cols-8 gap-2">
				<div class="row-start-1 col-start-2 col-span-6">
					<Chart
						title={'Daily Number of Swaps'}
						query_link={'https://flipsidecrypto.xyz/edit/queries/4d03c3e3-5a22-404a-9cf9-8833e9852f5c/visualizations/a42da858-6827-4052-88fb-b9b48cdab213'}
						description={'Daily number of swaps conducted by BTC.b bridge users'}
					>
						<div class="h-96" slot="figure">
							<DailySwaps chart_data={data.SWAPS} />
						</div>
					</Chart>
				</div>
				<div class="row-start-2 col-start-2 col-span-6">
					<Chart
						title={'Daily Swap Volume'}
						query_link={'https://flipsidecrypto.xyz/edit/queries/4d03c3e3-5a22-404a-9cf9-8833e9852f5c/visualizations/a42da858-6827-4052-88fb-b9b48cdab213'}
						description={'Daily swap volume contributed by BTC.b bridge users'}
					>
						<div class="h-96" slot="figure">
							<DailySwapsVol chart_data={data.SWAPS} />
						</div>
					</Chart>
				</div>
				<div class="row-start-3 col-start-2 col-span-6">
					<ChartLanguage
						><p slot="language">
							A similar trend in those transaction that are of swaps. Swapping activity has been a
							bit more steady with these users, seeing some big volume days as of late.
						</p></ChartLanguage
					>
				</div>
				<div class="row-start-4 col-start-2 col-span-6">
					<Chart
						title={'Swap Count Inflows Distribution'}
						query_link={'https://flipsidecrypto.xyz/edit/queries/cea1fcc0-7d09-4f06-9e7c-3e5199ff7378/visualizations/0e1b079d-67fe-4479-b0b6-1cb0f5621808'}
						description={'Distribution of number of swap inflows, partitioned by token in (Conducted on Sushiswap)'}
					>
						<div class="h-96" slot="figure">
							<SwapsInflows chart_data={data.SWAP_INFLOWS} />
						</div>
					</Chart>
				</div>
				<div class="row-start-5 col-start-2 col-span-6">
					<Chart
						title={'Swap Count Outflows Distribution'}
						query_link={'https://flipsidecrypto.xyz/edit/queries/4fb6f0ef-7c83-43a6-940d-657702c5d816/visualizations/0972475b-2b9f-432d-be92-c4b84faca1b3'}
						description={'Distribution of number of swap outflows, partitioned by token out (Conducted on Sushiswap)'}
					>
						<div class="h-96" slot="figure">
							<SwapsOutflows chart_data={data.SWAP_OUTFLOWS} />
						</div>
					</Chart>
				</div>
				<div class="row-start-6 col-start-2 col-span-6">
					<ChartLanguage
						><p slot="language">
							Taking a sample of swapping activity from sushiswap on avalanche data, the most
							popular token to swap to and from is WAVAX and MIM.
						</p></ChartLanguage
					>
				</div>
			</div>
			<div class="row-start-10 col-start-2 col-span-7">
				<h1 class="text-3xl font-bold py-8 text-center">Contracts</h1>
			</div>
			<div class="row-start-11 col-start-2 col-span-7 grid grid-cols-8 gap-2">
				<div class="row-start-1 col-start-2 col-span-6">
					<Chart
						title={'All Contracts Actions Distribution'}
						query_link={'https://flipsidecrypto.xyz/edit/queries/0d9e830c-69cc-4a7a-aace-33327e5bae66'}
						description={'Distribution of number of BTC.b bridge user acitons in terms of all Avalanche contracts'}
					>
						<div class="h-96" slot="figure">
							<ContractsActions chart_data={data.CONTRACTS_ACTIONS} />
						</div>
					</Chart>
				</div>
				<div class="row-start-2 col-start-2 col-span-6">
					<Chart
						title={'All Contracts Users Distribution'}
						query_link={'https://flipsidecrypto.xyz/edit/queries/0830a0da-2104-49f1-ba46-f7878a8faaeb'}
						description={'Distribution of number of BTC.b bridge users in terms of all Avalanche contracts'}
					>
						<div class="h-96" slot="figure">
							<ContractsUsers chart_data={data.CONTRACTS_USERS} />
						</div>
					</Chart>
				</div>
				<div class="row-start-3 col-start-2 col-span-6">
					<ChartLanguage
						><p slot="language">
							Looking at what contracts that BTC.b bridge users are interacting with on Avalanche,
							most of them are unknown labeled as 'other', but the known ones are Wrapped Avax and
							JoeToken.
						</p></ChartLanguage
					>
				</div>
				<div class="row-start-4 col-start-2 col-span-6">
					<ChartLanguage
						><p slot="language">
							<b>Key Takeaways</b>
							<br />
							<br />
							The number of BTC.b bridge users has seen substantial growth in the past 5 months. It is
							evident that these users are quite active across the board on Avalanche, interacting significantly
							with all areas, being active with swapping and other contracts on chain especially other
							token such as Wrapped AVAX.
						</p></ChartLanguage
					>
				</div>
			</div>
		</div>
	</div>
	<Footer />

</body>
