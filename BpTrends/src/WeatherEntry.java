
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
public class WeatherEntry {
	private Date date;
	private double airTemp;
	private boolean C=true;
	private double bp;
	private double dewPoint;
	private double relativeHumidity;
	private double windDir;
	private double windGust;
	private double windSpeed;
	static int count=0;
	
	public WeatherEntry() {
		
	}
	
	
	public WeatherEntry(Date date, double airTemp, double bp, double dewPoint, double relativeHumidity,
			double windDir, double windGust, double windSpeed) {
		
		this.date = date;

		this.airTemp = airTemp;
		this.bp = bp;
		this.dewPoint = dewPoint;
		this.relativeHumidity = relativeHumidity;
		this.windDir = windDir;
		this.windGust = windGust;
		this.windSpeed = windSpeed;
	}

	@Override
	public String toString() {
		count++;
		return "WeatherEntry "+count +" [date=" + date + ", airTemp=" + airTemp + ", bp=" + bp + ", dewPoint=" + dewPoint
				+ ", relativeHumidity=" + relativeHumidity + ", windDir=" + windDir + ", windGust=" + windGust
				+ ", windSpeed=" + windSpeed + "]";
	}


	public Date getDate() {
		return date;
	}


	public void setDate(Date date) {
		this.date = date;
	}


	public double getAirTemp() {
		return airTemp;
	}
	public double getBp() {
		return bp;
	}
	public double getDewPoint() {
		return dewPoint;
	}
	public double getRelativeHumidity() {
		return relativeHumidity;
	}
	public double getWindDir() {
		return windDir;
	}
	public double getWindGust() {
		return windGust;
	}
	public double getWindSpeed() {
		return windSpeed;
	}

	public void changeAirMeasurement(){
		// if celcius convert to farenehght
		// set C to false
		if(C==true){
			airTemp = ((airTemp * 9 / 5) + 32);
			C=false;

		//else if farenheight convert to celcius
		// set C to true;
		}else{
			airTemp = ((airTemp-32)*5/9);
			C=true;


		}

	}

}
