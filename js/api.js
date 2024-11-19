const petropavl = document.getElementById('Petropavl');
const vinnytsia = document.getElementById('Vinnytsia');
const minebro = document.getElementById('Minebro');

async function Api() {
    const respons_petropavl = await fetch('https://api.open-meteo.com/v1/forecast?latitude=54.8667&longitude=69.15&current_weather=true');
    const respons_vinnytsia = await fetch('https://api.open-meteo.com/v1/forecast?latitude=48.8534&longitude=2.3488&current_weather=true');
    const respons_minebro = await fetch('https://api.open-meteo.com/v1/forecast?latitude=29.5&longitude=47.75&current_weather=true');
    
    const data_petropavl = await respons_petropavl.json();
    const data_vinnytsia = await respons_vinnytsia.json();
    const data_minebro = await respons_minebro.json();
    
    return [data_petropavl, data_vinnytsia, data_minebro];
}

async function output() {
    try {
        let out = await Api();
        console.log(out);
        
        petropavl.textContent = `Air temperature: ${out[0].current_weather.temperature} \u00B0C`;
        vinnytsia.textContent = `Air temperature: ${out[1].current_weather.temperature} \u00B0C`;
        minebro.textContent = `Air temperature: ${out[2].current_weather.temperature} \u00B0C`;
    } catch (error) {
        console.log(error);
    } finally {
        setTimeout(output, 10000);
    }
}

output();