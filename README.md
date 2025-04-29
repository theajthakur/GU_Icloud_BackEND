# 📚 Student Login API

This is a simple backend API that provides a login endpoint for students. Upon successful authentication, it returns a login cookie for session management.

## 🔗 API Endpoint

### `POST /login`

Authenticates a student using their credentials.

#### 📥 Request Body

Send a JSON object with the following parameters:

```json
{
  "studentId": "your_student_id",
  "studentPass": "your_password"
}
```

### Sample Data

```json
{
  "generalInfo": [
    ["Father/Guardian Name", "Mohan Pandey"],
    ["Email", "SAMPLEMAIL@GMAIL.COM"],
    ["DOB", "12/03/2003"],
    ["Gender", "Male"],
    ["Nationality", "India"],
    ["Religion", "Hinduism"],
    ["Emergency Contact", ""],
    [
      "Local / Present Address",
      "E188, ALPHA-1 201308, GREATER NOIDA, GAUTAM BUDHHA NAGAR"
    ],
    ["Permanent Address", "Ramnagar, Chhapra BIHAR"],
    ["City", ""],
    ["State", "BIHAR"],
    ["Zip Code", "335643"],
    ["Admission Number", "21GCEBIT254"],
    ["Application Number", "210330845310"],
    ["Fee Category", "General"],
    ["Date of Admission", "22/08/2021"],
    ["User Id", "21GCEBIT254"],
    ["Class", "B.Tech CSE I"],
    ["Semester", "SEM II"],
    ["Roll No", "210GCEBIT0210"],
    ["Eligibility Number:", ""],
    ["PRN No.", ""]
  ],
  "picture": "https://placehold.co/800?text=Hello+World&font=roboto",
  "name": "Mohan Pandey"
}
```
