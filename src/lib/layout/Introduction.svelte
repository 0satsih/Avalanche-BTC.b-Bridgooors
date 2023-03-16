<script>
	import { Tabs, TabItem } from 'flowbite-svelte';
</script>

<div id="Preamble" class="ml-4 mr-3">
	<Tabs style="underline" contentClass="pt-4 mt-4 mx-2">
		<TabItem open title="Preamble">
			<p class="">
				This analysis examines the users that have used the BTC.b bridge on Avalanche chain. The
				Avalanche Bridge protocol can be used to transfer BTC from Bitcoin to the Avalanche C-Chain
				and vice versa.
				<br />
				<br />
				This analysis gives a background into how the BTC.b bridge users are behaving with the bridge
				contract itself, and then explores how these users are interating with the rest of the Avalanche
				chain, focusing on three categories, how they are transacting, how they are swapping, and how
				they are interacting with all Avalanche contracts.
				<br />
				<br />
				This analytical report is accompanied with a dashboard hosted on Flipside, where you can find
				all the data plus a little extra summary statistics on the topic.
			</p>
		</TabItem>
		<TabItem title="Methodolgy">
			<p>
				<b>Data Collection</b>
				<br />
				<br />
				All data is collected from the avalanche.core tables on Flipside. The custom visualisations you
				see in this report is powered with taking the Flipside data using an API.
				<br />
				<br>
				<b>Metrics</b>
			</p>
		</TabItem>
	</Tabs>
</div>
