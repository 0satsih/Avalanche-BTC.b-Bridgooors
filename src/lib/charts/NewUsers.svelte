<script lang="ts">
	import { onMount } from 'svelte';
	import Chart from 'chart.js/auto';
	import 'chartjs-adapter-date-fns';

	export let chart_data: Array<Object>;

	let canvas: any;

	const data = {
		datasets: [
			{
				type: 'bar',
				yAxisID: 'y',
				label: 'New Users',
				data: chart_data,
				parsing: {
					xAxisKey: 'DATE',
					yAxisKey: 'New Users'
				},
				backgroundColor: ['#E76F51'] //, '#2A9D8F', '#E9C46A', '#F4A261', '#E76F51']
			},
			{
				type: 'line',
				yAxisID: 'y1',
				label: 'Cumulative',
				data: chart_data,
				parsing: {
					xAxisKey: 'DATE',
					yAxisKey: 'Cumulative New Users'
				},
				backgroundColor: ['#2A9D8F'], //, '#2A9D8F', '#E9C46A', '#F4A261', '#E76F51']
				borderColor: ['#2A9D8F']
			}
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
						title: {
							display: true,
							text: 'Number of Users',
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
					},
					y1: {
						title: {
							display: true,
							text: 'Cumulative Users',
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
						},
						position: 'right',
						grid: {
							drawOnChartArea: false
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
