import { findByvalue, getComponent, setDic, setPx } from 'avue/utils/util.js'
import { validatenull } from 'avue/utils/validate.js'
import crudInput from 'avue/crud/src/crud-input'
import crudSelect from 'avue/crud/src/crud-select'
import crudRadio from 'avue/crud/src/crud-radio'
import crudCheckbox from 'avue/crud/src/crud-checkbox'
import crudCascader from 'avue/crud/src/crud-cascader'
import crudDate from 'avue/crud/src/crud-date'
import crudInputNumber from 'avue/crud/src/crud-input-number'
import { DIC } from 'avue/const/dic'
export default function() {
  return {
    props: {
      dicUrl: {
        type: String,
        default: 'http://47.106.144.24:1003/admin/dict/type' // http://47.106.144.24:1003/admin/dict/type

      }
    },
    components: {
      crudInput,
      crudSelect,
      crudRadio,
      crudCheckbox,
      crudDate,
      crudCascader,
      crudInputNumber
    },
    methods: {
      GetDic: function(list) {
        return new Promise((resolve, reject) => {
          const result = []
          if (validatenull(list)) {
            resolve(result)
            return
          }
          list.forEach(ele => {
            result.push(new Promise((resolve, reject) => {
              if (!validatenull(DIC[ele])) {
                resolve(DIC[ele])
              } else {
                if (validatenull(this.dicUrl)) {
                  resolve([])
                } else {
                  this.$http.get(`${this.dicUrl}/${ele}`).then(response => {
                    resolve(validatenull(response.data.data) ? [] : response.data.data)
                  })
                }
              }
            }))
          })
          const value = {}
          Promise.all(result).then(data => {
            list.forEach((ele, index) => {
              value[ele] = data[index]
            })
            resolve(value)
          })
        })
      },
      getComponent: function(type) {
        return getComponent(type)
      },
      findByvalue: function(dic, val) {
        return findByvalue(dic, val)
      },
      setDic: function(dicData, DIC) {
        return setDic(dicData, DIC)
      },
      setPx: function(val, defval) {
        return setPx(val, defval)
      }
    }
  }
}
