<template>
  <q-scroll-area :visible="true" :thumb-style="thumbStyle" style="height: 800px; font-size: 16px;">
    <div class="q-px-lg q-pb-md">
      <q-timeline color="secondary">
        <q-timeline-entry
          v-for="(event, index) in events"
          :key="index"
          :title="event.title"
          :subtitle="event.date"
        >
          <div v-html="renderMarkdown(event.description)"></div>
        </q-timeline-entry>
      </q-timeline>
    </div>
  </q-scroll-area>
</template>

<script>
import { QScrollArea, QTimeline, QTimelineEntry } from 'quasar';
import { marked } from 'marked';

export default {
  name: 'Timeline',
  components: {
    QScrollArea,
    QTimeline,
    QTimelineEntry
  },
  props: {
    events: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      thumbStyle: {
        right: '2px',
        borderRadius: '4px',
        backgroundColor: '#4C566A',
        width: '4px',
        opacity: 0.1
      }
    };
  },
  methods: {
    renderMarkdown(content) {
      return marked(content);
    }
  }
};
</script>

<style scoped>
.q-timeline {
  font-size: 16px;
}
</style>