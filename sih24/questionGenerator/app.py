# app.py
from flask import Flask, render_template, request,redirect
import google.generativeai as genai
import configparser
from flask_cors import CORS



# Create a ConfigParser object
config = configparser.ConfigParser()

# Read the configuration file
config.read('config.ini')

# Set the Google Gemini API key
google_gemini_api_key = config['API_KEYS']['GOOGLE_GEMINI_API_KEY']
genai.configure(api_key=google_gemini_api_key)

model = genai.GenerativeModel('gemini-1.5-flash')


# Define the name of the bot
name = 'Question generator BOT'

# Define the role of the bot
role = 'an expert on the Indian Constitution'

# Define the impersonated role with instructions
impersonated_role = f"""
   From now on, you are going to act as {name}. Your role is {role}.
   You generate and provide users with questions related to the Indian Constitution.
   Your responsibilities include creating questions based on specific keywords and difficulty levels.
   You ensure that the questions cover a wide range of topics from the Constitution, including but not limited to the Preamble, Fundamental Rights, Directive Principles of State Policy, and more.
   When responding to user queries,do not use the pronoun "I" and focus on providing just the relevant questions. If the prompt is not related to the Indian Constitution or question generation, decline to answer."""

# Create a Flask web application
app = Flask(__name__)
CORS(app)

def generate(keyword,difficulty):
    if not keyword or not difficulty:
        return 'error:Both keyword and difficulty level are required.', 400

    prompt = f"{impersonated_role} Give a multiple choice question on the following keyword '{keyword}' with difficulty '{difficulty}'."
    output = model.generate_content(prompt)
    question = output.text
    prompt2=f"{impersonated_role} .If the question is {question}, give appropriate 4 options for this multiple choice question.Just give the options numbered 1,2,3,4"
    output = model.generate_content(prompt2)
    options = output.text
    op_list=options.split('\n')
    op_list = [option[3:] for option in op_list]
    prompt3 = f"{impersonated_role}.Given questions is {question} with options {options}.What is the correct answer?Only give the option number."
    output = model.generate_content(prompt3)
    ans=output.text
    return {'question':question,'options':op_list,'answer':ans}

@app.route('/generate-question')
def generate_question():
    data = request.args
    keyword = data.get('keyword')
    difficulty = data.get('difficulty')
    output=generate(keyword,difficulty)
    return output
   



if __name__ == '__main__':
   app.run(debug=True)

# x=generate('preamble','easy')
# print(x)
