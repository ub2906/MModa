import React from 'react';
import { DropdownProps, Menu, Input, Icon } from 'semantic-ui-react';
import { debounce, getYouTubeResults } from '../../utils';
import { examples } from '../../utils/examples';
import { YouTubeSearchResult } from '../SearchResult/SearchResult';

interface ComboBoxProps {
  setMedia: Function;
  currentMedia: string;
  getMediaDisplayName: Function;
  launchMultiSelect: Function;
  mediaPath: string | undefined;
  streamPath: string | undefined;
  disabled?: boolean;
}

export class ComboBox extends React.Component<ComboBoxProps> {
  state = {
    inputMedia: undefined as string | undefined,
    results: undefined,
    loading: false,
    lastResultTimestamp: Number(new Date()),
  };
  debounced: any = null;

  setMedia = (e: any, data: DropdownProps) => {
    window.setTimeout(
      () => this.setState({ inputMedia: undefined, results: undefined }),
      300
    );
    this.props.setMedia(e, data);
  };

  doSearch = async (e: any) => {
    e.persist();
    this.setState({ inputMedia: e.target.value }, () => {
      if (!this.debounced) {
        this.debounced = debounce(async () => {
          this.setState({ loading: true });
          const query: string = this.state.inputMedia || '';
          let timestamp = Number(new Date());
          let results: JSX.Element[] | undefined = undefined;
          if (query === '' || (query && query.startsWith('http'))) {
            results = examples.map((option: any) => (
              <Menu.Item
                key={option.url}
                onClick={(e: any) => this.setMedia(e, { value: option.url })}
              >
                {option.url}
              </Menu.Item>
            ));
          } else {
            const data = await getYouTubeResults(query);
            results = data.map((result) => (
              <YouTubeSearchResult
                key={result.url}
                {...result}
                setMedia={this.setMedia}
              />
            ));
          }
          if (timestamp > this.state.lastResultTimestamp) {
            this.setState({
              loading: false,
              results,
              lastResultTimestamp: timestamp,
            });
          }
        }, 500);
      }
      this.debounced();
    });
  };

  render() {
    return <div></div>;
  }
}
