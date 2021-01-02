<template>
  <div id="tool-container">
    <h2>Magento 2 Configurable Variation Generator</h2>
    <div id="tool-content">
      <div id="input-area">
        <input
          type="file"
          name="csv-data"
          id="csv-data"
          accept=".csv"
          @change="readUploadFile"
        />
        <textarea readonly
          class="text-area"
          name="input"
          id="input"
          placeholder="input comes here (read and copy only)."
          v-model="inputContent"
        ></textarea>
      </div>
      <div id="output-area">
        <div class="buttoe-group">
          <button @click="generateVariation">Output result</button>
          <button @click="resetInput">Reset</button>
        </div>
        <textarea readonly
          class="text-area"
          name="result"
          id="resule"
          placeholder="result comes here (read and copy only)."
          v-model="resultContent"
        ></textarea>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      inputContent: '',
      resultContent: ''
    }
  },
  computed: {
  },
  methods: {
    readUploadFile (event) {
      var inputFile = event.target.files[0]
      var fileReader = new FileReader()
      fileReader.onload = () => {
        const result = fileReader.result
        this.inputContent = result
      }
      fileReader.readAsText(inputFile)
    },
    objectToString (csvDataObject) {
      var ResultText = ''

      csvDataObject.forEach(function (items) {
        for (const item in items) {
          ResultText += item + '=' + items[item] + ','
        }
        ResultText = ResultText.slice(0, -1)
        ResultText += '|'
      })
      ResultText = ResultText.slice(0, -1)
      ResultText = ResultText.replace(/[\n\r]/g, '')
      return ResultText
    },
    csvToArray (csvString) {
      // The array we're going to build
      var csvArray = []
      // Break it into rows to start
      var csvRows = csvString.split('\n')

      // Take off the first line to get the headers, then split that into an array
      var csvHeaders = csvRows.shift().split(',')

      // Loop through remaining rows
      for (var rowIndex = 0; rowIndex < csvRows.length; rowIndex++) {
        var rowArray = csvRows[rowIndex].split(',')

        // Create a new row object to store our data.
        var rowObject = csvArray[rowIndex] = {}

        // Then iterate through the remaining properties and use the headers as keys
        for (var propIndex = 0; propIndex < rowArray.length; propIndex++) {
          // Grab the value from the row array we're looping through...
          var propValue = rowArray[propIndex].replace(/['"]+/g, '')
          // ...also grab the relevant header (the RegExp in both of these removes quotes)
          var propLabel = csvHeaders[propIndex].replace(/['"]+/g, '')
          if (propValue !== '' && propLabel !== '') {
            rowObject[propLabel] = propValue
          }
        }
      }
      return csvArray
    },
    generateVariation () {
      if (document.getElementById('input').value == null) {
        alert('No file is selected!')
      } else {
        this.resultContent = this.objectToString(this.csvToArray(this.inputContent))
      }
    },
    resetInput () {
      this.inputContent = null
      this.resultContent = null
      document.getElementById('csv-data').value = null
    }
  }

}
</script>

<style scoped>
h2 {
  text-align: center;
}

#tool-content {
  display: flex;
  text-align: center;
  flex-wrap: wrap;
  align-items: stretch;
}

#input-area,
#output-area {
  width: 45%;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  margin: 20px;
  align-items: center;
  flex-grow: 1;
}

.text-area {
  width: 90%;
  min-width: 250px;
  height: 200px;
  margin: 20px;
}
</style>
