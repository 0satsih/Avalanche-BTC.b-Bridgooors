<script lang="ts">
	import { onMount } from 'svelte';
	import Chart from 'chart.js/auto';
	import 'chartjs-adapter-date-fns';

	export let chart_data: Array<Object>;

	let canvas: any;

	const data = {
		datasets: [
			{
				label: 'Transfer',
				data: chart_data.filter((e: any) => e.EVENT_NAME === 'Transfer'),
				parsing: {
					xAxisKey: 'DATE',
					yAxisKey: 'ACTIONS'
				},
				backgroundColor: ['#264653'] //, '#2A9D8F', '#E9C46A', '#F4A261', '#E76F51']
			},
			{
				label: 'Unwrap',
				data: chart_data.filter((e: any) => e.EVENT_NAME === 'Unwrap'),
				parsing: {
					xAxisKey: 'DATE',
					yAxisKey: 'ACTIONS'
				},
				backgroundColor: ['#E9C46A'] //, '#2A9D8F', '#E9C46A', '#F4A261', '#E76F51']
			},
			{
				label: 'Mint',
				data: chart_data.filter((e: any) => e.EVENT_NAME === 'Mint'),
				parsing: {
					xAxisKey: 'DATE',
					yAxisKey: 'ACTIONS'
				},
				backgroundColor: ['#F4A261'] //, '#2A9D8F', '#E9C46A', '#F4A261', '#E76F51']
			},
			{
				label: 'Approval',
				data: chart_data.filter((e: any) => e.EVENT_NAME === 'Approval'),
				parsing: {
					xAxisKey: 'DATE',
					yAxisKey: 'ACTIONS'
				},
				backgroundColor: ['#E76F51'] //, '#2A9D8F', '#E9C46A', '#F4A261', '#E76F51']
			},
			
		]
	};
	onMount(() => {
		const ctx = canvas.getContext('2d');
		var chart = new Chart(ctx, {
			type: 'bar',
			data: data,
			options: {
				maintainAspectRatio: false,
				responsive: true,
				scales: {
					x: {
						stacked: true,
						type: 'time',
						time: {
							unit: 'day'
						},
						reverse: false,
						border: {
							display: true,
							color: 'black',
							width: 1
						},
						grid: {
							display: false
						}
					},
					y: {
						stacked: true,
						title: {
							display: true,
							text: 'Number of Actions',
							font: {
								size: 15,
								family: "'Quicksand', 'sans-serif"
							},
							color: 'black',
							padding: 10
						},
						border: {
							display: true,
							color: 'black',
							width: 1
						}
					}
				},
				elements: {
					point: {
						pointStyle: false
					},
					line: {
						fill: false
					}
				},

				plugins: {
					legend: {
						display: true,
						position: 'right',
						align: 'start',
						labels: {
							usePointStyle: true,
							pointStyle: 'circle'
						}
					},
					tooltip: {
						callbacks: {
							title: function (context) {
								if (context[0].label.length == 26) {
									return context[0].label.substring(0, 11);
								} else {
									return context[0].label.substring(0, 12);
								}
							}
						},
						padding: 10,
						boxPadding: 3,
						titleAlign: 'center',
						titleMarginBottom: 6
					}
				},
				interaction: {
					intersect: false,
					mode: 'nearest',
					axis: 'x'
				}
			}
		});
	});
</script>

<canvas bind:this={canvas} class="pr-8" />
