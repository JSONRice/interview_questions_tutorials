import javax.json.JsonWriter;

public class JsonParser implements JsonWriter {
  public static void main() {
    /*
    JSONObject jsonObj = new JSONObject();
    Map<String,String[]> params = request.getParameterMap();
    for (Map.Entry<String,String[]> entry : params.entrySet()) {
      String v[] = entry.getValue();
      Object o = (v.length == 1) ? v[0] : v;
      jsonObj.put(entry.getKey(), o);
    }
    */
    System.out.println("jsonObj: " + JsonWriter.formatJson("{'uno': '1', 'dos':'2','tres':'3'"));		
  }
}
