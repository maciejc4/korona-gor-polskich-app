import { Injectable } from '@angular/core';

export interface WeatherData {
  temperature: number;
  weatherCode: number;
  windSpeed: number;
  humidity: number;
  description: string;
  icon: string;
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private readonly API_URL = 'https://api.open-meteo.com/v1/forecast';

  async getWeather(latitude: number, longitude: number): Promise<WeatherData | null> {
    try {
      const params = new URLSearchParams({
        latitude: latitude.toString(),
        longitude: longitude.toString(),
        current: 'temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m',
        timezone: 'Europe/Warsaw'
      });

      const response = await fetch(`${this.API_URL}?${params}`);
      
      if (!response.ok) {
        throw new Error('Weather API error');
      }

      const data = await response.json();
      const current = data.current;

      const weatherInfo = this.getWeatherInfo(current.weather_code);

      return {
        temperature: Math.round(current.temperature_2m),
        weatherCode: current.weather_code,
        windSpeed: Math.round(current.wind_speed_10m),
        humidity: current.relative_humidity_2m,
        description: weatherInfo.description,
        icon: weatherInfo.icon
      };
    } catch (error) {
      console.error('Error fetching weather:', error);
      return null;
    }
  }

  private getWeatherInfo(code: number): { description: string; icon: string } {
    // WMO Weather interpretation codes
    const weatherCodes: { [key: number]: { description: string; icon: string } } = {
      0: { description: 'Bezchmurnie', icon: 'wb_sunny' },
      1: { description: 'Głównie bezchmurnie', icon: 'wb_sunny' },
      2: { description: 'Częściowe zachmurzenie', icon: 'partly_cloudy_day' },
      3: { description: 'Pochmurno', icon: 'cloud' },
      45: { description: 'Mgła', icon: 'foggy' },
      48: { description: 'Szron', icon: 'ac_unit' },
      51: { description: 'Lekka mżawka', icon: 'grain' },
      53: { description: 'Mżawka', icon: 'grain' },
      55: { description: 'Silna mżawka', icon: 'grain' },
      61: { description: 'Lekki deszcz', icon: 'water_drop' },
      63: { description: 'Deszcz', icon: 'water_drop' },
      65: { description: 'Silny deszcz', icon: 'thunderstorm' },
      66: { description: 'Marznący deszcz', icon: 'ac_unit' },
      67: { description: 'Silny marznący deszcz', icon: 'ac_unit' },
      71: { description: 'Lekki śnieg', icon: 'ac_unit' },
      73: { description: 'Śnieg', icon: 'ac_unit' },
      75: { description: 'Silny śnieg', icon: 'ac_unit' },
      77: { description: 'Ziarnisty śnieg', icon: 'ac_unit' },
      80: { description: 'Przelotny deszcz', icon: 'water_drop' },
      81: { description: 'Przelotne opady', icon: 'water_drop' },
      82: { description: 'Silne przelotne opady', icon: 'thunderstorm' },
      85: { description: 'Przelotny śnieg', icon: 'ac_unit' },
      86: { description: 'Silny przelotny śnieg', icon: 'ac_unit' },
      95: { description: 'Burza', icon: 'thunderstorm' },
      96: { description: 'Burza z gradem', icon: 'thunderstorm' },
      99: { description: 'Silna burza z gradem', icon: 'thunderstorm' }
    };

    return weatherCodes[code] || { description: 'Brak danych', icon: 'help' };
  }
}
