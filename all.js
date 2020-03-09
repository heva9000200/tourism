const content = document.querySelector('#data')
const Sanmin = document.querySelector('#Sanmin')
const title = document.querySelector('#title')
const area = document.querySelector('#area')
// 熱門區
const Lingya = document.querySelector('#Lingya')
const Xinxing = document.querySelector('#Xinxing')
const Nanzi = document.querySelector('#Nanzi')
// JSON
const url =
  'https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97'
fetch(url)
  .then(res => res.json())
  .then(json => {
    let dNone = ''
    let data = json.result.records

    area.addEventListener('change', e => {
      let txt = ''
      for (let i = 0; i < data.length; i++) {
        if (data[i].Zone == e.target.value) {
          if (data[i].Ticketinfo == '') {
            dNone = 'd-none'
          }
          title.innerHTML = data[i].Zone
          txt += updata(
            data[i].Picture1,
            data[i].Name,
            data[i].Zone,
            data[i].Opentime,
            data[i].Add,
            data[i].Tel,
            dNone,
            data[i].Ticketinfo
          )
        }
      }
      content.innerHTML = txt
    })

    // 熱門區
    Sanmin.addEventListener('click', e => {
      let txt = ''
      for (let i = 0; i < data.length; i++) {
        if (data[i].Zone == '三民區') {
          if (data[i].Ticketinfo == '') {
            dNone = 'd-none'
          }
          title.innerHTML = data[i].Zone
          txt += updata(
            data[i].Picture1,
            data[i].Name,
            data[i].Zone,
            data[i].Opentime,
            data[i].Add,
            data[i].Tel,
            dNone,
            data[i].Ticketinfo
          )
        }
        content.innerHTML = txt
      }
    })

    Lingya.addEventListener('click', e => {
      let txt = ''
      for (let i = 0; i < data.length; i++) {
        if (data[i].Zone == '苓雅區') {
          if (data[i].Ticketinfo == '') {
            dNone = 'd-none'
          }
          title.innerHTML = data[i].Zone
          txt += updata(
            data[i].Picture1,
            data[i].Name,
            data[i].Zone,
            data[i].Opentime,
            data[i].Add,
            data[i].Tel,
            dNone,
            data[i].Ticketinfo
          )
        }
        content.innerHTML = txt
      }
    })

    Xinxing.addEventListener('click', e => {
      let txt = ''
      for (let i = 0; i < data.length; i++) {
        if (data[i].Zone == '新興區') {
          if (data[i].Ticketinfo == '') {
            dNone = 'd-none'
          }
          title.innerHTML = data[i].Zone
          txt += updata(
            data[i].Picture1,
            data[i].Name,
            data[i].Zone,
            data[i].Opentime,
            data[i].Add,
            data[i].Tel,
            dNone,
            data[i].Ticketinfo
          )
        }
        content.innerHTML = txt
      }
    })

    Nanzi.addEventListener('click', e => {
      let txt = ''
      for (let i = 0; i < data.length; i++) {
        if (data[i].Zone == '楠梓區') {
          if (data[i].Ticketinfo == '') {
            dNone = 'd-none'
          }
          title.innerHTML = data[i].Zone
          txt += updata(
            data[i].Picture1,
            data[i].Name,
            data[i].Zone,
            data[i].Opentime,
            data[i].Add,
            data[i].Tel,
            dNone,
            data[i].Ticketinfo
          )
        }
        content.innerHTML = txt
      }
    })
  })
// 頁面
function updata(Picture1, Name, Zone, Opentime, Add, Tel, dNone, Ticketinfo) {
  return `
            <div class="col-6 d-flex">
              <div class="card mb-5 flex-fill">
                <div class="bgCover text-white d-flex align-items-end justify-content-between"style="background-image: url('${Picture1}'); width: 100%; height: 200px;">
                  <h2 class="ml-4">${Name}</h2>
                  <p class="mr-4">${Zone}</p>
                </div>
                <div class="card-body ">
                  <p class="mb-2">
                    <img src="img/icons_clock.png" alt="" /><span class="ml-2 align-self-stretch">${Opentime}</span>
                  </p>
                  <p class="mb-2">
                    <img src="img/icons_pin.png" alt="" /><span class="ml-2 align-self-stretch">${Add}</span>
                  </p>
                    <div class="d-flex justify-content-between">
                      <p class="mb-2">
                        <img
                          src="img/icons_phone.png"
                          alt=""
                          style="margin-left: 3px;"/><span class="ml-2">${Tel}</span>
                        </p>
                        <p class="${dNone}">
                          <img src="img/icons_tag.png" alt="" /><span class="ml-2">${Ticketinfo}</span
                          >
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
            `
}
// 回到頁首
$(document).ready(function() {
  $('.top button').click(function() {
    $('html,body').animate({ scrollTop: 0 }, 333)
  })
})
