import dataAnalyzer from "./dataAnalyzer.js"
import colorPicker from "./colorPicker.js"

Chart.defaults.color = '#fff'
Chart.defaults.borderColor = '#444'

printCharts()
updateChart()

function printCharts(){
    renderWebShopOccurrences()
    renderPromotionTypes()
    renderEachPromoTypeOccurrences()
    renderMinMaxAverage()
}

function updateChart () {
    document.querySelector('#changeDataSecondChart').onchange = e => {
        const newData = dataAnalyzer.countEachPromoTypeOccurrences(e.target.selectedOptions[0].value)
        let dollarsOrPercentage = e.target.selectedOptions[0].value == "percent-off" ? "%" : "$";

        let namesFieldPromotionType = newData.map(promotion => promotion.key+dollarsOrPercentage)
        let valueFieldPromotionType = newData.map(promotion => promotion.value)

        const chart = Chart.getChart("chartPromotionValuesOccurrences")
        chart.data.labels = namesFieldPromotionType
        chart.data.datasets[0].data = valueFieldPromotionType

        chart.update()
    }
}

//CHART 1
export function renderWebShopOccurrences() {
    let dataWebShop = dataAnalyzer.countWebShopOccurrences()
    let namesFieldWebShop = dataWebShop.map(coupon => coupon.key)
    let valueFieldWebShop = dataWebShop.map(coupon => coupon.value)
    const data = {
        labels: namesFieldWebShop,
        datasets:[{
            data: valueFieldWebShop,
            backgroundColor: colorPicker.getColors(namesFieldWebShop.length),
            hoverOffset: 4
        }]
    }
    const options = {
        plugins: {
            legend: { position: 'top' }
        }
    }
    new Chart('chartCouponsOccurrences', {type: "doughnut", data, options})
}

//CHART 2
export function renderEachPromoTypeOccurrences() {
    let dataPromotionType = dataAnalyzer.countEachPromoTypeOccurrences("percent-off")
    let namesFieldPromotionType = dataPromotionType.map(promotion => promotion.key+"%")
    let valueFieldPromotionType = dataPromotionType.map(promotion => promotion.value)
    const data = {
        labels: namesFieldPromotionType,
        datasets:[{
            data: valueFieldPromotionType,
            borderColor: colorPicker.getColors(namesFieldPromotionType.length),
            backgroundColor : colorPicker.getColors(namesFieldPromotionType.length),
        }],
    }
    const options = {
        plugins: {
            legend: { position: 'none' }
        }
    }
    new Chart('chartPromotionValuesOccurrences', {type: "bar", data, options})
}

//CHART 3
export function renderPromotionTypes() {
    let dataPromotionType = dataAnalyzer.countPromotionTypes()
    let namesFieldPromotionType = dataPromotionType.map(promotion => promotion.key)
    let valueFieldPromotionType = dataPromotionType.map(promotion => promotion.value)
    const data = {
        labels: namesFieldPromotionType,
        datasets:[{
            label: 'Promotion types',
            data: valueFieldPromotionType,
            fill: true,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgb(54, 162, 235)',
            pointBackgroundColor: 'rgb(54, 162, 235)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(54, 162, 235)'
        }]
    }
    const options ={
        plugins: {
            legend: {
            display: false
            }
        }
          
    }
    new Chart('chartPromotionKeysOcurrences', {type: "radar", data, options})
}

//CHART 4
export function renderMinMaxAverage() {
    let averagePercentOff = dataAnalyzer.getAverageByPromotionType("percent-off")
    let averageDollarOff = dataAnalyzer.getAverageByPromotionType("dollar-off")
    let minPercentOff = dataAnalyzer.getMinValueByPromotionType("percent-off")
    let minDollarOff = dataAnalyzer.getMinValueByPromotionType("dollar-off")
    let maxPercentOff = dataAnalyzer.getMaxValueByPromotionType("percent-off")
    let maxDollarOff = dataAnalyzer.getMaxValueByPromotionType("dollar-off")
    
    const data = {
        labels: ["Min", "Max", "Average"],
        datasets:[{
            label: 'Percent-Off',
            data: [minPercentOff, maxPercentOff, averagePercentOff],
            borderColor: ["red"],
            backgroundColor: ["rgba(255, 0, 0, 0.5)"],
        },
        {
          label: 'Dollar-Off',
          data: [minDollarOff, maxDollarOff, averageDollarOff],
          borderColor: ["blue"],
          backgroundColor: ["rgba(0, 0, 255, 0.5)"],
        }]
    }
    new Chart('chartMinMaxAverage', {type: "radar", data})
}
