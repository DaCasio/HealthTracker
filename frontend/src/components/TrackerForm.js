// frontend/src/components/TrackerForm.js
function TrackerForm() {
  const [formData, setFormData] = useState({
    weight: '',
    blood_pressure: '',
    mood: 'gut'
  });

  return (
    <form>
      <input type="number" step="0.1" name="weight" 
             onChange={e => setFormData({...formData, weight: e.target.value})} />
      
      <input type="text" name="blood_pressure" 
             pattern="\d{1,3}/\d{1,3}" 
             onChange={e => setFormData({...formData, blood_pressure: e.target.value})} />
      
      <select name="mood" onChange={e => setFormData({...formData, mood: e.target.value})}>
        <option value="gut">😊 Gut</option>
        <option value="neutral">😐 Neutral</option>
        <option value="schlecht">😞 Schlecht</option>
      </select>
    </form>
  );
}
