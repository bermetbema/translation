const kyrgyzWords = [
  "салам",
  "дос",
  "үй",
  "мектеп",
  "китеп",
  "шаар",
  "айыл",
  "тоо",
  "суу",
  "аба",
  "күн",
  "ай",
  "жол",
  "убакыт",
  "жумуш",
  "акча",
  "тамак",
  "сабак",
  "балдар",
  "адам",
  "жүрөк",
  "ой",
  "тил",
  "жашоо",
  "келечек"
]
kyrgyzWords.forEach(elemt=>{
    let li = document.createElement('li')
    li.innerHTML= elemt
    li.className = 'text'
    document.body.append(li)
    })
