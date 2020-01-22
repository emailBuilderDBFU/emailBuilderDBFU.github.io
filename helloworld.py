from flask import Flask, render_template

app = Flask(__name__)

@app.after_request
def add_header(r):
	"""
	Add headers to both force latest IE rendering engine or Chrome Frame,
	and also to cache the rendered page for 10 minutes.
	"""
	r.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
	r.headers["Pragma"] = "no-cache"
	r.headers["Expires"] = "0"
	r.headers['Cache-Control'] = 'public, max-age=0'
	return r

@app.route('/')
def home():
	return render_template('home.html')

@app.route('/butt_world')
def butt_world():
	return 'Ass that don\'t quit'

if __name__ == "__main__":
	app.run()


