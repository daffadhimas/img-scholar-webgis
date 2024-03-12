<div id="map" style="width: 100%; height: 100vh;"></div>;

const building = L.layerGroup();
const IMG = L.marker([-6.891081443514233, 107.61236318624552])
  .bindPopup("Sekretariat IMG-ITB")
  .addTo(building);

//basemap
var Street = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
});

var Topo = L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
});

//menampilkan peta
var map = L.map("map", {
  center: [-6.904945389699194, 107.64121290363994],
  zoom: 12,
  layers: [Street],
});

//layer basemap
var baseMap = {
  Street: Street,
  Topo: Topo,
};
var overlays = {
  "IMG-ITB": IMG,
};

var layerControl = L.control
  .layers(baseMap, overlays, {
    collapsed: false,
    position: "topright",
  })
  .addTo(map);

//geojson
$.getJSON(
  '<?= base_url("kecamatan-bandung/andir.geojson") ?>',
  function (data) {
    L.geoJSON(data, {
      style: function (feature) {
        return {
          color: "#0000FF",
        };
      },
    })
      .bindPopup("Kecamatan Andir")
      .addTo(map);
  }
);
$.getJSON(
  '<?= base_url("kecamatan-bandung/antapani.geojson") ?>',
  function (data) {
    L.geoJSON(data, {
      style: function (feature) {
        return {
          color: "#00FFFF",
        };
      },
    })
      .bindPopup("Kecamatan Antapani")
      .addTo(map);
  }
);
$.getJSON(
  '<?= base_url("kecamatan-bandung/arcamanik.geojson") ?>',
  function (data) {
    L.geoJSON(data, {
      style: function (feature) {
        return {
          color: "#8A2BE2",
        };
      },
    })
      .bindPopup("Kecamatan Arcamanik")
      .addTo(map);
  }
);
$.getJSON(
  '<?= base_url("kecamatan-bandung/astanaanyar.geojson") ?>',
  function (data) {
    L.geoJSON(data, {
      style: function (feature) {
        return {
          color: "#A52A2A",
        };
      },
    })
      .bindPopup("Kecamatan Astanaanyar")
      .addTo(map);
  }
);
$.getJSON(
  '<?= base_url("kecamatan-bandung/babakan_ciparay.geojson") ?>',
  function (data) {
    L.geoJSON(data, {
      style: function (feature) {
        return {
          color: "#DEB887",
        };
      },
    })
      .bindPopup("Kecamatan Babakan Ciparay")
      .addTo(map);
  }
);
$.getJSON(
  '<?= base_url("kecamatan-bandung/bandung_kidul.geojson") ?>',
  function (data) {
    L.geoJSON(data, {
      style: function (feature) {
        return {
          color: "#5F9EA0",
        };
      },
    })
      .bindPopup("Kecamatan Bandung Kidul")
      .addTo(map);
  }
);
$.getJSON(
  '<?= base_url("kecamatan-bandung/bandung_kulon.geojson") ?>',
  function (data) {
    L.geoJSON(data, {
      style: function (feature) {
        return {
          color: "#7FFF00",
        };
      },
    })
      .bindPopup("Kecamatan Bandung Kulon")
      .addTo(map);
  }
);
$.getJSON(
  '<?= base_url("kecamatan-bandung/bandung_wetan.geojson") ?>',
  function (data) {
    L.geoJSON(data, {
      style: function (feature) {
        return {
          color: "#D2691E",
        };
      },
    })
      .bindPopup("Kecamatan Bandung Wetan")
      .addTo(map);
  }
);
$.getJSON(
  '<?= base_url("kecamatan-bandung/batununggal.geojson") ?>',
  function (data) {
    L.geoJSON(data, {
      style: function (feature) {
        return {
          color: "#FF7F50",
        };
      },
    })
      .bindPopup("Kecamatan Batununggal")
      .addTo(map);
  }
);
$.getJSON(
  '<?= base_url("kecamatan-bandung/bojongloa_kaler.geojson") ?>',
  function (data) {
    L.geoJSON(data, {
      style: function (feature) {
        return {
          color: "#6495ED",
        };
      },
    })
      .bindPopup("Kecamatan Bojongloa Kaler")
      .addTo(map);
  }
);
$.getJSON(
  '<?= base_url("kecamatan-bandung/bojongloa_kidul.geojson") ?>',
  function (data) {
    L.geoJSON(data, {
      style: function (feature) {
        return {
          color: "#FFF8DC",
        };
      },
    })
      .bindPopup("Kecamatan Bojongloa Kidul")
      .addTo(map);
  }
);
$.getJSON(
  '<?= base_url("kecamatan-bandung/buahbatu.geojson") ?>',
  function (data) {
    L.geoJSON(data, {
      style: function (feature) {
        return {
          color: "#DC143C",
        };
      },
    })
      .bindPopup("Kecamatan Buahbatu")
      .addTo(map);
  }
);
$.getJSON(
  '<?= base_url("kecamatan-bandung/cibeunying.geojson") ?>',
  function (data) {
    L.geoJSON(data, {
      style: function (feature) {
        return {
          color: "#00FFFF",
        };
      },
    })
      .bindPopup("Kecamatan Cibeunying")
      .addTo(map);
  }
);
$.getJSON(
  '<?= base_url("kecamatan-bandung/cibeunying_kaler.geojson") ?>',
  function (data) {
    L.geoJSON(data, {
      style: function (feature) {
        return {
          color: "#00008B",
        };
      },
    })
      .bindPopup("Kecamatan Cibeunying Kaler")
      .addTo(map);
  }
);
$.getJSON(
  '<?= base_url("kecamatan-bandung/cibeunying_kidul.geojson") ?>',
  function (data) {
    L.geoJSON(data, {
      style: function (feature) {
        return {
          color: "#008B8B",
        };
      },
    })
      .bindPopup("Kecamatan Cibeunying Kidul")
      .addTo(map);
  }
);
$.getJSON(
  '<?= base_url("kecamatan-bandung/cibru.geojson") ?>',
  function (data) {
    L.geoJSON(data, {
      style: function (feature) {
        return {
          color: "#B8860B",
        };
      },
    })
      .bindPopup("Kecamatan Cibru")
      .addTo(map);
  }
);
$.getJSON(
  '<?= base_url("kecamatan-bandung/cicadap.geojson") ?>',
  function (data) {
    L.geoJSON(data, {
      style: function (feature) {
        return {
          color: "#A9A9A9",
        };
      },
    })
      .bindPopup("Kecamatan Cicadap")
      .addTo(map);
  }
);
$.getJSON(
  '<?= base_url("kecamatan-bandung/cinambo.geojson") ?>',
  function (data) {
    L.geoJSON(data, {
      style: function (feature) {
        return {
          color: "#006400",
        };
      },
    })
      .bindPopup("Kecamatan Cinambo")
      .addTo(map);
  }
);
$.getJSON(
  '<?= base_url("kecamatan-bandung/gedebage.geojson") ?>',
  function (data) {
    L.geoJSON(data, {
      style: function (feature) {
        return {
          color: "#BDB76B",
        };
      },
    })
      .bindPopup("Kecamatan Gedebage")
      .addTo(map);
  }
);
$.getJSON(
  '<?= base_url("kecamatan-bandung/kiaracondong.geojson") ?>',
  function (data) {
    L.geoJSON(data, {
      style: function (feature) {
        return {
          color: "#8B008B",
        };
      },
    })
      .bindPopup("Kecamatan Kiaracondong")
      .addTo(map);
  }
);
$.getJSON(
  '<?= base_url("kecamatan-bandung/lengkong.geojson") ?>',
  function (data) {
    L.geoJSON(data, {
      style: function (feature) {
        return {
          color: "#556B2F",
        };
      },
    })
      .bindPopup("Kecamatan Lengkong")
      .addTo(map);
  }
);
$.getJSON(
  '<?= base_url("kecamatan-bandung/mandalajati.geojson") ?>',
  function (data) {
    L.geoJSON(data, {
      style: function (feature) {
        return {
          color: "#FF8C00F",
        };
      },
    })
      .bindPopup("Kecamatan Mandalajati")
      .addTo(map);
  }
);
$.getJSON(
  '<?= base_url("kecamatan-bandung/panyileukan.geojson") ?>',
  function (data) {
    L.geoJSON(data, {
      style: function (feature) {
        return {
          color: "#9932CC",
        };
      },
    })
      .bindPopup("Kecamatan Panyileukan")
      .addTo(map);
  }
);
$.getJSON(
  '<?= base_url("kecamatan-bandung/rancasari.geojson") ?>',
  function (data) {
    L.geoJSON(data, {
      style: function (feature) {
        return {
          color: "#8B0000",
        };
      },
    })
      .bindPopup("Kecamatan Rancasari")
      .addTo(map);
  }
);
$.getJSON(
  '<?= base_url("kecamatan-bandung/regol.geojson") ?>',
  function (data) {
    L.geoJSON(data, {
      style: function (feature) {
        return {
          color: "#E9967A",
        };
      },
    })
      .bindPopup("Kecamatan Regol")
      .addTo(map);
  }
);
$.getJSON(
  '<?= base_url("kecamatan-bandung/sukajadi.geojson") ?>',
  function (data) {
    L.geoJSON(data, {
      style: function (feature) {
        return {
          color: "#8FBC8F",
        };
      },
    })
      .bindPopup("Kecamatan Sukajadi")
      .addTo(map);
  }
);
$.getJSON(
  '<?= base_url("kecamatan-bandung/sukasari.geojson") ?>',
  function (data) {
    L.geoJSON(data, {
      style: function (feature) {
        return {
          color: "#483D8B",
        };
      },
    })
      .bindPopup("Kecamatan Sukasari")
      .addTo(map);
  }
);
$.getJSON(
  '<?= base_url("kecamatan-bandung/sumur_bandung.geojson") ?>',
  function (data) {
    L.geoJSON(data, {
      style: function (feature) {
        return {
          color: "#2F4F4F",
        };
      },
    })
      .bindPopup("Kecamatan Sumur Bandung")
      .addTo(map);
  }
);
$.getJSON(
  '<?= base_url("kecamatan-bandung/ujungberung.geojson") ?>',
  function (data) {
    L.geoJSON(data, {
      style: function (feature) {
        return {
          color: "#00CED1",
        };
      },
    })
      .bindPopup("Kecamatan Ujungberung")
      .addTo(map);
  }
);
