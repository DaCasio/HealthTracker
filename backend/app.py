# backend/app.py
from sklearn.linear_model import LinearRegression
import pandas as pd

@app.route('/analyze', methods=['GET'])
def analyze_data():
    docs = db.collection('health_data').stream()
    df = pd.DataFrame([doc.to_dict() for doc in docs])
    
    # Beispiel-Korrelation: Gewicht vs. Stimmung
    model = LinearRegression()
    model.fit(df[['weight']], df['mood_num']) # mood_num als numerischer Wert
    correlation = model.coef_[0]
    
    return jsonify({
        'weight_mood_correlation': f"{correlation:.2f}",
        'critical_days': df[df['mood'] == 'schlecht'].to_dict('records')
    })
