// entar ini pindah aja wkwk
function countInterest(gpa){
    switch (true) {
      case (gpa>3.7):
        return 0
      case (gpa>3.5&&gpa<=3.7):
        return 1.5
      case (gpa>3.2&&gpa<=3.5):
        return 2.5
      case (gpa>3.0&&gpa<=3.2):
        return 3
      case (gpa<3):
        return 3.5
    }
  }